const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});
server.use(logger);


//custom middleware

function logger(req, res, next) {
  console.log(req, req.params, new Date().toJSON);
  next();
}

module.exports = server;
