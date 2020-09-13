const express = require('express');
const db = require('../data/dbConfig.js');
const userDB = require('./userDb');

const userDb = require('./userDb');
const { restart } = require('nodemon');
const { json } = require('express');

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  // do your magic!
  userDb.insert(req.body)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(error => {
    res.status(500).json({message: "Could not create user"})
  })
}); // Checked!

router.post('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  userDB.insert(req.body)
  .then(post => {
    res.status(201).json(post)
  })
  .catch(error => {
    res.status(500).json({message: "Could not create post"})
  })
});

router.get('/', (req, res) => {
  // do your magic!
  userDB.get()
  .then(data => {
    console.log("Everything is good!")
    res.status(200).json(data)
  })
  .catch(error => {
    res.status(500).json({message: "error connecting to the server"})
  })
}); // Checked!

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  res.status(200).json(data)
  
}); // Need help!

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  const {id} = req.params
  userDB.getById(id)
  .then(message => {
    res.json(message.posts)
    console.log("Everything is good!")
  })
  .catch(error => {
    res.status(500).json({message: "Could not retrieve user"})
  })
});

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  const {id} = req.params
  userDB.remove(id)
  .then(message => {
    res.json(req.body)
    res.status(200).json({message: "The user has been nuked!"})
  })
  .catch(error => {
    res.status(500).json({message: "Could not remove the user"})
  })
}); // Checked!

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
  const {id} = req.params
  const changes = req.body

  if(!changes.name){
    res.status(404).json({message: "Please provide a name to update!"})
  }else{
  userDB.update(id, changes)
  .then(data => {
    res.status(200).json(changes)
  })
  .catch(error => {
    res.status(500).json({message: "There was a problem retrieving your information"})
  })}
}); // Checked!

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const { id } = req.params
  userDB.getById(id)
  .then(data => {
    req.user = data
    next();
  })
  .catch(error => {
    res.status(400).json({message: "invalid user id"})
  })

} // Checked!

function validateUser(req, res, next) {
  // do your magic!
  body = req.body
  if(!body){
    res.status(400).json({message: "missing user data"})
  }else if(!body.name){
    res.status(400).json({message: "missing required name field."})
  }else{
    next();
  }
}

function validatePost(req, res, next) {
  // do your magic!
  body = req.body
  if(!body){
    res.status(400).json({message: "missing post data"})
  }else if(!body.text){
    res.status(400).json({message: "missing required text field"})
  }else{
    next();
  }
}

module.exports = router;
