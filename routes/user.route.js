const router = require('express').Router()
const { body } = require('express-validator')
const { newClient, newTherapist, fetchTherapist, fetchClients } = require('../controllers/usersController')

// get all therapists
router.get('/therapists', fetchTherapist)

// get all therapists
router.get('/clients', fetchClients)


/**********************
* route url: baseUrl/user/create-client
* endpoint request body: 
{
    "title": String,
    "firstName": String,
    "surname": String,
    "phone": String,
    "email": String,
    "homeAddress": {
        addressLine1: String,
        addressLine2: String | opt,
        town: String,
        country: String,
        eirCode: String,
    },
    dob: Date,
    guardianName: String,
    contactPermission: Bool,
    gender: String,
    maritalStatus: String | [Never Married, Domestic Partnership, Married, Separated, Divorced, Widowed],
    referrer: String,
}
**********************/
router.post(
    '/create-client',
    body('title').not().isEmpty().withMessage('users title is required'),
    body('email').not().isEmpty().withMessage('email is required'),
    body('firstName').not().isEmpty().withMessage('first name is required'),
    body('surname').not().isEmpty().withMessage('surname is required'),
    body('phone').not().isEmpty().withMessage('phone is required'),
    body('homeAddress.addressLine1').not().isEmpty().withMessage('address line 1 is required'),
    body('homeAddress.town').not().isEmpty().withMessage('town is required'),
    body('homeAddress.country').not().isEmpty().withMessage('country is required'),
    body('homeAddress.eirCode').not().isEmpty().withMessage('eir code is required'),
    body('dob').not().isEmpty().withMessage('date of birth is required'),
    body('contactPermission').not().isEmpty().withMessage('provide permission to contact via email/phone'),
    body('maritalStatus').not().isEmpty().withMessage('marital status is required').isIn(['never married', 'domestic patnership', 'married', 'separated', 'divorced', 'widowed']).withMessage('Supplied string is not allowed'),
    body('gender').not().isEmpty().withMessage('gender is required').isIn(['male', 'female', 'other']).withMessage('Supplied string is not allowed'),
    newClient
)


/**********************
* route url: baseUrl/user/create-therapist
* endpoint request body: 
{
    "title": String,
    "firstName": String,
    "surname": String,
    "phone": String,
    "email": String,
    "homeAddress": {
        addressLine1: String,
        addressLine2: String | opt,
        town: String,
        country: String,
        eirCode: String,
    }
}
**********************/
router.post(
    '/create-therapist',
    body('title').not().isEmpty().withMessage('users title is required'),
    body('email').not().isEmpty().withMessage('email is required'),
    body('firstName').not().isEmpty().withMessage('first name is required'),
    body('surname').not().isEmpty().withMessage('surname is required'),
    body('phone').not().isEmpty().withMessage('phone is required'),
    body('homeAddress.addressLine1').not().isEmpty().withMessage('address line 1 is required'),
    body('homeAddress.town').not().isEmpty().withMessage('town is required'),
    body('homeAddress.country').not().isEmpty().withMessage('country is required'),
    body('homeAddress.eirCode').not().isEmpty().withMessage('eir code is required'),
    newTherapist
)

module.exports = router