const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
const User = require('../models/Users')

exports.addUser = (req, res, next) => {
  console.log(req.body)
  const{login, password, role} = req.body
  const user = new User({
    login,
    password: '',
    role
  })
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.send(res.sendStatus(500))
    } else {
      user.password = hash
      user.save((err) => {
        if(err) {
          res.sendStatus(500)
        } else {
          res.sendStatus(201)
        }
      })
}
})
}

exports.getUser = (req, res, next) => {
  if(!req.headers['x-auth']) {
    return res.sendStatus(401)
  }
  try {
    let auth = jwt.decode(req.headers['x-auth'], 'secret_code')
  } catch (err) {
    return res.sendStatus(401)
  }
  User.findOne({login: auth.login}, function(err, user) {
    if (err) {return res.sendStatus(500)}

    else {
      res.json(user)
    }

  })
}
