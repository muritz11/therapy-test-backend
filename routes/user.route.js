const router = require('express').Router()
const { body } = require('express-validator')
const { fetchUsers, newTherapist } = require('../controllers/usersController')

// get all users
// router.get('/users', fetchUsers)


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