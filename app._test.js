const request = require('supertest');

var app = require('./app').app;
let token;
it('404 on bad route', function (done) {
    request(app).get('/').expect(404).expect('Error 404');
    request(app).get('/user/test').expect(404).expect('Error 404').end(done);
});

it('Test getting 401 if ampty login or password login', function (done) {
    request(app).post('/user/login').expect(401).end(done);
});

it('Test getting 401 if uncorrect login or password login', function (done) {
    request(app).post('/user/login').expect(401).end(done);
});

it('Test getting a JWT token with correct user data', function (done) {
    chai.request(app).post('/user/login').type("json").send({
        "name": "user1",
        "password": "12345678"
    })
    .expect(200, {
        "token": should.be.a('string')
    })
    .end(done);
});

// it('Test getting a JWT token with correct user data', function (done) {
//     request(app).post('/user/login').type("json").send({
//         "name": "user1",
//         "password": "12345678"
//     })
//     .expect(200, {
//         "token": should.be.a('string')
//     })
//     .end(done);
// });

// it('Test getting a JWT token with correct user data', function (done) {
//     let resOk = {
//         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJpYXQiOjE2NjIxMDY1NjF9.DnxBHg9G2sUtErj40ccJ3XbJKv_aqKSW1q764iphjqc"
//     }
//     request(app).post('/user/login').set('Authorization', 'abc123').send({}).expect(200).expect((res)=>{
//         res.body != resOk;
//     }).end(done);
// });