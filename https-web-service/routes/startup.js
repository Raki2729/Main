import express from 'express'
const startup = express.Router()


startup.get('/', (req,res)=>{
    res.send('It is Working!!')
})
startup.get('/alive', (req,res)=>{
    res.send('HTTPS-web-Service is Alive')
})

// commonjs format

export default startup