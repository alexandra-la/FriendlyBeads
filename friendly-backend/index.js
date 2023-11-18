const express = require('express')
const mongoos = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3000

//Routes
const userRoutes = require('./api/UserRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('test')
})

app.use('/users', userRoutes)

app.listen(port,()=>{
    console.log('app running')
})