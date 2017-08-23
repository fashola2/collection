const express = require("express")
const router = express.Router()
const Car = require("../models/Car")

router.get("/", function(req, res) {
  Car.find().then(function(cars) {
    res.render("index", {
      cars: cars,
    })
  })
})

router.get("/cars/new", function(req, res) {
  res.render("new")
})

router.post("/cars", function(req, res) {
  const make = req.body.make
  const model = req.body.model
  const car = new Car()
  car.make = make
  car.model = model
  car.save().then(function(car) {
    res.redirect("/")
  }).catch(function(error) {
    res.render("new", {
      car: car,
      errors: error.errors
    })
  })
})

router.post("/cars/:id", function(req, res) {
  Car.findOne({_id: req.params.id}).then(function(car) {
    const make = req.body.make
    const model = req.body.model
    car.make = make
    car.model = model
    car.save().then(function(car) {
      res.redirect("/")
    }).catch(function(error) {
      res.render("edit", {
        car: car,
        errors: error.errors
      })
    })
  })
})

router.get("/cars/:id", function(req, res) {
  Car.findOne({ _id: req.params.id}).then(function(car) {
    res.render("detail", {
      car: car
    })
  })
})

router.get("/cars/:id/edit", function(req, res) {
  Car.findOne({_id: req.params.id}).then(function(car) {
    res.render("edit", {
      car: car
    })
  })
})

router.get("/cars/:id/delete", function(req, res) {
  Car.deleteOne({_id: req.params.id}).then(function() {
    res.redirect("/")
  })
})
module.exports = router
