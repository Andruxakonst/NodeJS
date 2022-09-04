const chai = require('chai'),
  chaiHttp = require('chai-http'),
  expect = chai.expect
;
server = require('./app')
const jwt = require('jsonwebtoken')
const config = require('./config.json');

chai.use(chaiHttp)

describe('Users API', () => {

  it('404 on bad route /', (done) => {
    chai
      .request(server)
      .post('/')
      .end((err, res) => {
        expect(res,"Error 404").to.have.status(404)
        done()
      })
  })
  
  it('404 on bad route /user/test', (done) => {
    chai
      .request(server)
      .post('/user/test')
      .end((err, res) => {
        expect(res,"Error 404").to.have.status(404)
        done()
      })
  })

  it('Test getting 401 if ampty login or password login', (done) => {
    chai
      .request(server)
      .post('/user/login')
      .end((err, res) => {
        expect(res,"Error name or password").to.have.status(401)
        done()
      })
  })

  it('Test getting a JWT token with correct user data', (done) => {
    chai
      .request(server)
      .post('/user/login')
      .type("json")
      .send({
        "name": "user1",
        "password": "12345678"
      })
      .end((err, res) => {
        expect(err).to.be.null
        expect(res).to.have.status(200)
        expect(res.body).to.haveOwnProperty('token')
        done()
      })
  })

  it('Test error getting a JWT token with uncorrect user data', (done) => {
    chai
      .request(server)
      .post('/user/login')
      .type("json")
      .send({
        "name": "NOT_USER",
        "password": "12345678"
      })
      .end((err, res) => {
        expect(res,"Error name or password").to.have.status(401)
        done()
      })
  })

  it('Test error send massege', (done) => {
    chai
      .request(server)
      .post('/user/send')
      .type("json")
      .set({ "Authorization": `Bearer_${jwt.sign({"user_id":2},config.tokenKey)}`})
      .send({
        "name": "user1",
        "massage": "TEST MASSEGE"
      })
      .end((err, res) => {
        expect(res,"Ошибка в передаваемых данных").to.have.status(400)
        done()
      })
  })

  it('Test send massege', (done) => {
    chai
      .request(server)
      .post('/user/send')
      .type("json")
      .set({ "Authorization": `Bearer_${jwt.sign({"user_id":2},config.tokenKey)}`})
      .send({
        "name": "user1",
        "message": "TEST MASSEGE"
      })
      .end((err, res) => {
        expect(res,"Massage saved").to.have.status(200)
        done()
      })
  })

  it('Test get massege', (done) => {
    chai
      .request(server)
      .post('/user/send')
      .type("json")
      .set({ "Authorization": `Bearer_${jwt.sign({"user_id":2},config.tokenKey)}`})
      .send({
        "name": "user1",
        "message": "history 5"
      })
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object');
        done()
      })
  })
})
