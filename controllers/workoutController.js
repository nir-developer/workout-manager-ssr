const Workout = require('../models/workoutModel')

exports.createWorkout = async (req,res) => {
    try 
    {
        

        console.log(req.body)
       // READ REQUEST BODY (ALOS TYPE! FOR POLYMORPHISM)
        const {duration, distance,location} = req.body; 

        //VALIDATE REQUEST BODY
        
        if(!duration ||
           !distance || 
           !location ||
           !location.type || 
           !location.coordinates)
        throw new Error('createWorkout Handler: duration ,distance , and location with a type and coordinates are required ')


        console.log('createWorkout HandlerREQUEST BODY IS VALID:')
        console.log(duration, distance, location)

        //CREATE WORKOUT OBJECT
        const workout = new Workout({duration, distance, location})
        

        //SAVE WORKOUT OBJECT
        const newWorkout = await workout.save(); 

        console.log('createWorkout Handler - Save workout success')
        console.log(newWorkout)


        res.status(201).json({
            status:'success', 
            data:{
               workout:newWorkout
            }
        })


    }
    catch(err)
    {
        console.log(err.message)
        res.status(400).json({
            message:err.message
        })


    }
}


exports.getAllWorkouts   = async(req,res) => {
    try 
    {
        const workouts = await Workout.find(); 
        console.log('SUCCESS LOADING WORKOUTS FROM DB:')
        console.log(workouts)


        res.status(200).json({
            status:'success', 
            results: workouts.length, 
            data:{
                workouts
            }
        })
    }
    catch(err)
    {

        res.status(500).json({
            message:'findAllWorkouts handler: Could not load workouts'
        })
    }
}