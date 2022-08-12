const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId


/**************************************************************
 * use the same schema to store both therapist and client, with different usertypes ['therapist', 'client']
 * client additional info will be option in the schemma but compulsory for 'create new client endpoint'
 * skipped session time and date as they can be gotten from the auto generated 'createdAt'
 * ************************************************************/
const SessionSchema = new mongoose.Schema({
    clients: [{ type: ObjectId, required: [true, "provide at least one client"], ref: "Users" }],
    therapist: {
        type: ObjectId,
        required: [true, "please provide a therapist"],
        ref: 'users'
    },
    fee: {
        type: Number,
        required: [true, "please provide user's email"]
    },
    sessionNumber: {
        type: Number,
        required: [true, "Provide session number"]
    },
    sessionAttendance: {
        type: String,
        required: [true, "Provide session attendance"],
        enum: ['attended', 'cancelled', 'no show']
    },
    sessionType: {
        type: String,
        required: [true, "Provide session type"]
    },
    sessionNotes: {
        type: String,
        required: [true, "Provide session notes"]
    }
},{
    timestamps: true
})

module.exports = mongoose.model.Users || mongoose.model("Sessions", SessionSchema)