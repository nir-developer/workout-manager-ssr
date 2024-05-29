const workoutRouter = require('./routers/workoutRouter')

const viewsRouter = require('./routers/viewsRouter')

const path = require('path')
const express = require('express')
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const morgan = require('morgan')

const app = express(); 


app.use(morgan('dev'))


app.use(bodyParser.json())
app.use(cookieParser()); 



app.use(express.static(path.join(__dirname, 'public')))


//SET PUG AS THE VIEW ENGINE 
app.set('vies', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


//ROUTE to render the index page 
// app.use('/', (req,res) =>{
//     console.log('HOME PAGE')
//     res.render('base')
// })

app.use('/workouts', viewsRouter)



//VIEW RENDERING ROUTES 







module.exports = app 