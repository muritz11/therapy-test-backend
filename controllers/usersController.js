const { validationResult } = require('express-validator');
const User = require('../db/userModel')


module.exports.newTherapist = async (request, response) => {

    const errors = validationResult(request)
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() })
    

    const { title, email, phone, firstName, surname, homeAddress } = request.body

    const therapist = new User({
        title,
        email,
        firstName,
        surname,
        phone,
        homeAddress,
        userType: 'therapist'
    })

    therapist.save()
        .then((result) => {
            response.status(201).send({
                dt: user.userType,
                message: "Therapist Created Successfully",
                result,
            });
        })
        .catch((error) => {
            response.status(500).send({
            message: "Error creating therapist",
            error,
            });
        });

}
