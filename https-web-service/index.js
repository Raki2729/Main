import express from 'express'
import https from 'https'
import {readFileSync} from 'fs'
import 'dotenv/config'
import cors from 'cors';
import startup from './routes/startup.js'
import studentInfo from './routes/studentInfo.js'
import location from './routes/location.js'

const app = express()
// const cert = fs.readFileSync('./ssl/cert.pem')
// const key = fs.readFileSync('./ssl/key.pem')

const httpsOptions ={
    key: readFileSync('./ssl/key.pem'),
    cert: readFileSync('./ssl/cert.pem')
}

const server = https.createServer(httpsOptions,app)
app.use(cors())
app.use(express.json())
app.use('/https-web-service/v1',startup)
app.use('/https-web-service/v1',studentInfo)
app.use('/https-web-service/v1',location)


console.log(process.env.IP2LOCATION_API_KEY)
// domain-name/web-service/v1/<route/path/> ==> endpoint
//safeway.com/order-purchases/v1/purchasHistory ==> endpoint
// safeway.com/order-purchases/v2/purchaseHistory ===> endpoint




server.listen(3000, ()=>{
    console.log('Server is up')
})




