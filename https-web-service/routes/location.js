import express from 'express'

const location = express.Router()

//const API_KEY = 'F5079332E99066E954224E901FD9D995'
console.log(process.env.IP2LOCATION_API_KEY)
location.get('/user-location', (req, res)=>{
    console.log(req)

    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const userDevice = req.header('User-Agent')

    res.json({userIp: userIp, userDevice:userDevice })
})



export default location;