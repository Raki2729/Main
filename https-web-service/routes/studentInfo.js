const express = require('express')
const data = require('../database/student-info.json')
const studentInfo = express.Router()


console.log(data, "this is our data")
//GET  / to retrieve all the student-info
//POST /to retrieve your information based on 'student-id'
//POST /to retrieve student's info who has taken CS548 -> the result should be all students ( return student-id only)
//POST /to retrieve who has taken the courses you have taken except CS548. (Hint: Pass your student-id  for example for Rahel its CS522, find out who has taken this course) one of the logic could be this 
//students.filter(student => student.courses.some(course => course.course_id === course_id)
studentInfo.use((req,res,next)=>{
    req.userIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    req.userDevice = req.get('User-Agent')
    next()
})
studentInfo.get('/studentinfo', (req,res)=>{
    const userIp= req.userIP;
    const userDevice = req.userDevice;
    console.log(userIp, userDevice)
    res.json({userIp, userDevice,data})
})
studentInfo.post('/student',(req,res)=>{
    const {student_id} = req.body;
    if(!student_id){
        return res.status(400).json({message: "Student was not found"})

    }

    const studentObject = data.find(s =>s.student_id === student_id)
    res.json(studentObject?.student)
});

studentInfo.post('/students/course', (req, res) => {
    const { student_id } = req.body;
    const studentsTakenCourse = data.filter(student => 
        student.courses.includes(student_id)
    );
    const studentIds = studentsTakenCourse.map(student => student.student_id);
    if (studentIds.length > 0) {
        res.json(studentIds);
    } else {
        res.status(404).json({ message: "No students found for the given course" });
    }
});



module.exports = studentInfo