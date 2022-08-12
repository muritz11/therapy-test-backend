const mongoose = require('mongoose')


/**************************************************************
 * use the same schema to store both therapist and client, with different usertypes ['therapist', 'client']
 * client additional info will be option in the schemma but compulsory for 'create new client endpoint'
 * ************************************************************/
const UserSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "please provide user's title"]
    },
    surname: {
        type: String,
        required: [true, "please provide user's surname"]
    },
    phone: {
        type: String,
        required: [true, "please provide user's phone number"]
    },
    email: {
        type: String,
        required: [true, "please provide user's email"]
    },
    homeAddress: {
        addressLine1: {
            type: String,
            required: [true, "Provide address line 1"]
        },
        addressLine2: {
            type: String
        },
        town: {
            type: String,
            required: [true, "Provide address town"]
        },
        country: {
            type: String,
            required: [true, "Provide address country"]
        },
        eirCode: {
            type: String
        }
    },
    userType: {
        type: String,
        enum: ['therapist', 'client']
    },
    dob: String,
    guardianName: String,
    contactPermission: Boolean,
    maritalStatus: {
        type: String,
        enum: ['never married', 'domestic patnership', 'married', 'saparated', 'divorced', 'widowed']
    },
    referrer: String,
    gender: String,
    gender: String,

},{
    timestamps: true
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema)