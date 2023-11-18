import * as connection from '/PrivateInfo/mongodbconnect.json'

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port = process.env.PORT || 3000
const connectString = connection;

//Routes
const userRoutes = require('./api/UserRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('test')
})

app.use('/users', userRoutes)

mongoose.connect(connectString, {useUnifiedTopology :true}).then(()=>{

    app.listen(port,()=>{
        console.log('app running...')
    })
}).catch(err=>console.log(err))