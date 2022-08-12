const sessionsModel = require("../db/sessionsModel");


module.exports.createSession = (request, response) => {

    const { clients, therapist, sessionNumber, sessionAttendance, sessionType, sessionNotes, fee } = request.body

    if (clients.length > 3) 
        return response.status(400).send({
            status: 'error',
            message: 'clients should be less than 3 per session'
        })

    
    const sess = new sessionsModel({
        clients,
        therapist,
        sessionNumber,
        sessionAttendance,
        sessionType,
        sessionNotes,
        fee
    })

    sess.save()
        .then((result) => {
            response.status(201).send({
                status: 'success',
                message: "Session Created Successfully",
                result,
            });
        })
        .catch((error) => {
            response.status(500).send({
                status: 'error',
                message: "Error creating new session",
                error,
            });
        });
}