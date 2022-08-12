const router = require('express').Router()


router.get("/", (request, response, next) => {
    response.json({ message: "Hey! This is your server response!" })
    next()
})
router.use('/user', require('./user.route'))
router.use('/session', require('./sessions.route'))

module.exports = router