const mongoose = require('mongoose')
require('dotenv').config()

/**************************************************************
 * I am using a mongoDB hosted on mongoDb atlas data cloud
 * ************************************************************/
async function dbConnect() {
    mongoose
        .connect(
            process.env.DB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        ).then(() => {
            console.log("successfully connected to mongoDb atlas!")
        }).catch((error) => {
            console.log('Unable to connect to mongoDb atlas!')
            console.log(error)
        })
}

module.exports = dbConnect