const express = require('express')
const router = express.Router()
const { addUser, getUser } = require('../controlles/registrConrolles')

router.post('', addUser)
router.get('', getUser)
// router.get('/acc', accaunt)

module.exports = router
