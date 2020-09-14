// code away!
const express = require('express');

// const Hubs = require('./hubs/hubs-model.js');
const userRouter = require('./users/userRouter');
const { proppatch } = require('./users/userRouter');

const server = express();

server.use(express.json());
server.use(logger);
server.use("/api/users", userRouter);



function logger(req, res, next) {
    console.log(req, req.params, new Date().toJSON);
    next();
  }

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
}); // Made a change