const express = require('express')
const startup = express.Router()


startup.get('/', (req,res)=>{
    res.send('It is Working!!')
})
startup.get('/alive', (req,res)=>{
    res.send('HTTPS-web-Service is Alive')
})

// commonjs format

module.exports = startup