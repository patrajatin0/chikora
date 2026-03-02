const dotenv = require("dotenv")
dotenv.config({
    path: "./.env"
})
const app = require("../src/app")
const connectDB = require("../src/model/database")
const { model } = require("mongoose")


const port = process.env.PORT

// connectDB()
//     .then((result) => {
//         console.log("the database connection establisher...");
//         // app.listen(port, () => {
//         //     console.log("The port is listening on the localhost:" + port);

//         // })

//     }).catch((err) => {
//         console.log("the db is not connected");

//     })


let isConnected = false
async function connectToMongoDB() {
    try {
        connectDB()
            .then((result) => {
                console.log("the database connection establisher...");
                // app.listen(port, () => {
                //     console.log("The port is listening on the localhost:" + port);

                // })

            }).catch((err) => {
                console.log("the db is not connected");

            })

    } catch (error) {
        throw new Error("ERROR" + error.message)
    }

}
app.use((req, res, next) => {
    if (!isConnected) {
        connectToMongoDB()
    }
    next()
})
