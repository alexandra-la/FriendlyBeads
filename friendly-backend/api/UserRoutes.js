const router = require('express').Router()
const User = require('../models/user')

router.get('/',(req,res)=>{
    User.find().then(users =>{
        res.status(200).json(users)
    }).catch(err =>{
        res.status(500).json({error: err.message})
    })
    
})

module.exports = router