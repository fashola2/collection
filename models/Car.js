// const express = require("express")
// const app = express()
// const mustache = require("mustache-express")
// const bodyParser = require("body-parser")
// const session = require("express-session")
// app.engine("mustache", mustache())
// app.set("view engine", "mustache")
// app.use(express.static("public"))
// app.use(bodyParser.urlencoded({ extended: false }))


const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost:27017/cars');


const carSchema = new mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  color: String,
  // specs: [{
  //   horsepower: Number,
  //   torque: Number,
  //   topSpeed: Number
  // }]
})

const Whips = mongoose.model('cars', carSchema);
 // console.log(carSchema);

module.exports = Whips
