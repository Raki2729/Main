const express = require('express')
const https = require('https')
const fs = require('fs')
const startup = require('./routes/startup')
const classSchedule = require('./routes/classSchedule')
const location = require('./routes/location')


const app = express()
// const cert = fs.readFileSync('./ssl/cert.pem')
// const key = fs.readFileSync('./ssl/key.pem')

const httpsOptions ={
    key: fs.readFileSync('./ssl/key.pem'),
    cert: fs.readFileSync('./ssl/cert.pem')
}

const server = https.createServer(httpsOptions,app)
app.use(express.json())
app.use('/https-web-service/v1',startup)
app.use('/https-web-service/v1',classSchedule)
app.use('/https-web-service/v1',location)


// domain-name/web-service/v1/<route/path/> ==> endpoint
//safeway.com/order-purchases/v1/purchasHistory ==> endpoint
// safeway.com/order-purchases/v2/purchaseHistory ===> endpoint



server.listen(3000, ()=>{
    console.log('Server is up')
})



