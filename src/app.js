
const express = require("express")
const app = express()
const productRoute = require("./routes/productRoute")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", productRoute)

module.exports = app

