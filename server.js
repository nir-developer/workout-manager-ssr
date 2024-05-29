const dotenv = require('dotenv')
dotenv.config({path:'config.env'})

const app = require('./app')

const mongoose = require('mongoose')


const PORT = process.env.PORT || 3000; 
// const DB = process.env.DB;
//const DB = process.env.DB_ATLAS
const DB = process.env.DB_COMPASS

const server = app.listen(PORT, () =>{ 
    console.log(`WORKOUT MANAGER - API RUNS ON  http://localhost:${PORT}/natours/api/v1/`)
})


mongoose.connect(DB) 
.then(()=> {
    console.log(`SUCCESS CONNECTING TO DB URL: ${DB}`)
    //app.listen(PORT, () => console.log(`Natours API listening on port  ${PORT} in ${process.env.NODE_ENV} mode`))

})