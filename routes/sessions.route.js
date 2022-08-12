const router = require('express').Router()
const { body } = require('express-validator')
const { createSession } = require('../controllers/sessionsController')

// get all therapists
// router.get('/therapists', fetchTherapist)

// get all therapists
// router.get('/clients', fetchClients)


/**********************
* route url: baseUrl/session/create
* endpoint request body: 
{
    "clients": [clientId: String],
    "therapist": therapistId,
    "sessionNumber": Number,
    "sessionAttendance": String | ['attended', 'cancelled', 'no show'],
    "sessionType": String,
    "sessionNotes": String,
    "fee": Number,
}
**********************/
router.post(
    '/create',
    body('clients').not().isEmpty().withMessage('clients is required'),
    body('therapist').not().isEmpty().withMessage('therapist is required'),
    body('sessionNumber').not().isEmpty().withMessage('session number is required'),
    body('sessionAttendance').not().isEmpty().withMessage('session attendance is required'),
    body('sessionType').not().isEmpty().withMessage('session type is required'),
    body('sessionNotes').not().isEmpty().withMessage('session notes is required'),
    body('fee').not().isEmpty().withMessage('fee is required'),
    createSession
)

module.exports = router