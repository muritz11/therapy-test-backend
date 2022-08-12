const router = require('express').Router()
const auth = require("../middleware/auth")


router.get("/", (request, response, next) => {
    response.json({ message: "Hey! This is your server response!" })
    next()
})
router.use('/user', require('./user.route'))

module.exports = router