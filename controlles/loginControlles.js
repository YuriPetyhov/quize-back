const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
const User = require('../models/Users')

exports.login = (req, res, next) => {
  if (!req.body.login || !req.body.password) {
    // если один или оба параметра запроса опущены,
    // возвращаем 400 - Bad Request
    return res.sendStatus(400)
  } else {
    const login = req.body.login
    const password = req.body.password

    User.findOne({login: login} ,function(err, user){
      console.log(user, '<---- user')
      if (err) {
        return res.sendStatus(500)
      }
      if (!user) {return res.sendStatus(401)}
      bcrypt.compare(password, user.password, function(err, valid){
        if (err) {
          return res.sendStatus(500)
        }
        if (!valid){ return res.sendStatus(401)}
        var token = jwt.encode({login: login, role: user.role, avatar: user.avatar},'secret_code')
        res.send(token)
      })
    })
    // указываем явно, что нам нужно значение поля password
    // (ибо его выборка отключена в модели)
    //   /.select('password role')

  }
}


exports.accaunt = (req, res, next) => {
  if (!req.headers['x-auth']) { return res.sendStatus(401)}
  try {
    let login = jwt.decode(req.headers['x-auth'], "secret_code").login
  } catch(err) {
    return res.sendStatus(401)
  }

  User.findOne({login: login}, function(err, user){
    if (err) {
      return res.sendStatus(500)
    } // ошибка БД, возвращаем 500 - Internal Server Error
    if (!user) {
      return res.sendStatus(401)
      // пользователя нет в БД, возвращаем 401 - Unauthorized
    }
    res.json(user) // если всё в порядке, возвращаем JSON с user
  })
}
