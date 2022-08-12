const router = require('express').Router()
const { body } = require('express-validator')
const { createSession, updateSession, deleteSession, fetchSessions } = require('../controllers/sessionsController')

// get all therapists
// router.get('/therapists', fetchTherapist)

// get all sessions
router.get('/fetch', fetchSessions)


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



/**********************
* route url: baseUrl/session/update
* endpoint request body: 
{
    "sessionId": String,
    "clients": [clientId: String] | opt,
    "therapist": therapistId | opt,
    "sessionNumber": Number | opt,
    "sessionAttendance": String | ['attended', 'cancelled', 'no show'] | opt,
    "sessionType": String | opt,
    "sessionNotes": String | opt,
    "fee": Number | opt,
}
**********************/
router.put('/update', 
    body('sessionId').not().isEmpty().withMessage('session id is required'),
    updateSession)

    
/**********************
* route url: baseUrl/session/delete
* endpoint request body: 
{
    "sessionId": String
}
**********************/
router.delete('/delete', deleteSession)

module.exports = router