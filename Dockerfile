FROM node:12.22.12
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait && npm start