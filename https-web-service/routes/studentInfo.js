const express = require('express')
const data = require('../database/student-info.json')
const studentInfo = express.Router()


console.log(data, "this is our data")
//GET  / to retrieve all the student-info
//POST /to retrieve your information based on 'student-id'
//POST /to retrieve student's info who has taken CS548 -> the result should be all students ( return student-id only)
//POST /to retrieve who has taken the courses you have taken except CS548. (Hint: Pass your student-id  for example for Rahel its CS522, find out who has taken this course) one of the logic could be this 
//students.filter(student => student.courses.some(course => course.course_id === course_id)
studentInfo.get('/studentinfo', (req,res)=>{
    res.json(data)
})
studentInfo.post('/StudentInfo',(req,res)=>{
    const {student_id} = req.body;
    const foundStudent= data.find(s=> s["Student_Id"]===student_id)
    if(foundStudent){
        res.json(foundStudent);
    }else{
        res.status(404).json({message:"student not found!!"})
    }

});

app.post('/students/cs-course', (req, res) => {
    const { course_id } = req.body;
    const studentsTakenCourse = data.filter(student => 
        student.courses.includes(course_id)
    );
    const studentIds = studentsTakenCourse.map(student => student.student_id);
    if (studentIds.length > 0) {
        res.json(studentIds);
    } else {
        res.status(404).json({ message: "No students found for the given course" });
    }
});



module.exports = studentInfo