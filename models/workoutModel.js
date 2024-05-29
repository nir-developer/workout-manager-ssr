const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    type:{
        type:String, enum:['Point'], required:true},
        coordinates:{ type: [Number], required:true}
}
)


const workoutSchema =new mongoose.Schema({
    duration:{
        type:Number, 
        required:true
    }, 
    distance: {
        type:Number, 
        required:true
    },
    location:{
        type:locationSchema, 
        required:true
    }

})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout