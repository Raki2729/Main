import express from 'express'
import { getLoggerInstance } from '../logger.js';
const startup = express.Router()

const logger = getLoggerInstance()

startup.get('/', (req,res)=>{
    logger.info('GET / - It is Working!!');
    res.send('It is Working!!')
})
startup.get('/alive', (req,res)=>{
    logger.info('GET /alive - HTTPS-web-Service is Alive'); // Log the message
    res.send('HTTPS-web-Service is Alive')
})

// commonjs format

export default startup