require('dotenv').config({ path: '.env' });

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const port =  3000
const { MongoClient, ServerApiVersion } = require('mongodb');


//Routes
const userRoutes = require('./api/UserRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('test')
})

app.use('/users', userRoutes)

const client = new MongoClient(process.env.MONGODB, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);