const Workout = require("../models/workoutModel")

/**
 * xports.getOverview = catchAsync(async(req,res,next) =>{

    //1) GET TOURS FROM DB
    const tours = await Tour.find(); 

    //2) Build the template 

    //3) Render this template using data from 1
    res.status(200).render('overview', {
        title: 'All Tours', 
        tours

    })

})

 */
exports.getAllWorkouts = async(req,res,next) =>{

    try 
    {
        let workouts =await  Workout.find(); 
        console.log('SUCCESS FETCH ALL WORKOUTS!')
        console.log(workouts)

       
        res.status(200).render('overview', {
            title:'WORKOUTS',
            workouts
        })


    }
    catch(err)
    {
        res.status(500).json({
            message: err.message
        })
    }
    // res.status(200).json({
    //     status:'success'
    // })
}

exports.createWorkout = async(req,res,next) =>{
    try 
    {
        console.log(req.body); 

        const workout = new Workout(req.body)

        const newWorkout = await workout.save(); 

        console.log('SUCCESS CREATING NEW WORKOUT!')
        console.log(newWorkout)


        res.status(201).render('overview', {
            newWorkout
        })
        

       
        
    }
    catch(err)
    {
        console.log('ERROR')
        console.log(err.message)
        res.status(500).json({message:"Could not create workout!"})
    }
}