const workoutController = require('../controllers/workoutController')

const express = require('express')

const workoutRouter = express.Router(); 

workoutRouter
.route('/') 
.post(workoutController.createWorkout)
.get(workoutController.getAllWorkouts)


module.exports = workoutRouter