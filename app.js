const express = require("express")
const app = express()
const mustache = require("mustache-express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
mongoose.Promise = require("bluebird")
app.engine("mustache", mustache())
app.set("view engine", "mustache")
app.use(bodyParser.urlencoded({ extended: false }))

const MONGO_URL = "mongodb://127.0.0.1:27017/vehicles"
mongoose.connect(MONGO_URL)

const Car = require("./models/Car")
const carRoutes = require("./routes/vehicles")

app.use(carRoutes)

app.listen(3000, function() {
  console.log("listening on 3000");
})
