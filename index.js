// code away!
const express = require('express');

// const Hubs = require('./hubs/hubs-model.js');
const userRouter = require('./users/userRouter');

const server = express();

server.use(express.json());
server.use(logger);
server.use("/api/users", userRouter);



function logger(req, res, next) {
    console.log(req, req.params, new Date().toJSON);
    next();
  }

server.listen(5000, () => {
  console.log('\n*** Server Running on http://localhost:5000 ***\n');
});