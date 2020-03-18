const http = require('http');
const app = require('./app');
const serverless = require('serverless-http');
// const hostname = 'gangulyari.com';
const port = process.env.PORT || 3000;
const server = http.createServer();
server.listen(port);