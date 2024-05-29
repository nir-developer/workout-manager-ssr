const viewsController = require('../controllers/viewsController')

const express = require('express')

const viewsRouter = express.Router(); 

viewsRouter
.route('/') 
.post(viewsController.createWorkout)
.get(viewsController.getAllWorkouts)


module.exports = viewsRouter