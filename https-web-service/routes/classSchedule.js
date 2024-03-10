const express = require('express')
const data = require('../database/class-schedule.json')
const classSchedule = express.Router()
//const fs = require('fs')

console.log(data, "this is our data")
// our routes/endpoin/crud operation
/*
1.Get (fetch all data)
2.Get /Post with Query params of course
3.Get/POST with Query params of /online-courses
4.Post where the classroom is assigned
5.Put to update the classroom/change the classroom
6.Delete one of the course

*/
classSchedule.use((req,res,next)=>{
    req.userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress
   req.userDevice = req.get('User-Agent')
   next()
}) 
classSchedule.get('/courses',(req,res)=>{
    // no request because there is no request from the client side
    //just sent the data which is needed in this case its "data"
    const userIp = req.userIp;
    const userDevice = req.userDevice;
    console.log(userIp, userDevice)
    res.json({userIp, userDevice, data})

})
classSchedule.get('/courses/:course',(req,res)=>{
    
    const userIp = req.userIp;
    const userDevice = req.userDevice;
    console.log(userIp, userDevice)
    const {course} = req.params
    const foundCourse = data.find(c =>c["Course"]=== course)
    if(foundCourse){
        //res.json(foundCourse)
       res.status(200).json({userIp, userDevice,foundCourse})
    }else{
        res.status(404).json({message:"Course not found!!"})
    }
})
classSchedule.get('/online-courses',(req,res)=>{
    const userIp = req.userIp;
    const userDevice = req.userDevice;
    console.log(userIp, userDevice)
    const onlineCourses = data.filter(c =>c.Classroom.includes('Online'));

    if(onlineCourses){
       res.status(200).json({userIp, userDevice,onlineCourses})
    }else{
        res.status(404).json({message:"There are no Online Classes!!"})
    }
})

classSchedule.post('/classroom', (req,res)=>{
    const userIp = req.userIp;
    const userDevice = req.userDevice;
    console.log(userIp, userDevice)
    const {course} = req.body
    if(!course){
        return res.status(400).json({message: "Course was not provided"})

    }
    const courseObject = data.find(c => c.Course === course)
    // classroom is object
    res.status(200).json({userIp, userDevice,classroom:courseObject?.Classroom })
})

classSchedule.post('/courseinfo',(req,res)=>{
    const userIp = req.userIp;
    const userDevice = req.userDevice;
    console.log(userIp, userDevice)
    const {course}= req.body
    const foundCourse = data.find(c => c.Course=== course)
    if(foundCourse){
        res.status(200).json({userIp, userDevice,foundCourse})
    }else{
        res.status(404).json({message:"Course not found!!"})
    }
})
/* classSchedule.put('update/.course', (req, res)=>{
    const {course} = req.params
    const {newInstructor, token} = req.body
    // token === admin
    if(token=== 'admin'){
        const index = data.findIndex(c=> c.course=== course)

        data[index].Instructor = newInstructor
        const filePath = path.json(__dirname, 'updated-class-schedule.json','class-schedul')
        fs.writeFileSync(filePath, JSON.stringify)

        res.json({message: "Instructor Updated!!"})
    }
 })*/


module.exports = classSchedule
