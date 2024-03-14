import express from 'express'
import data from '../database/student-info.json' assert { type: 'json' };

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
studentInfo.post("/",(req,res)=>{
    const userIp= req.userIP;
    const userDevice = req.userDevice;
    const student = data.find(item=> item.student_id == req.body.student_id)
    if(student){
        res.json({userIp, userDevice,student})
    }
})

studentInfo.post('/course', (req, res) => {
    const userIp= req.userIP;
    const userDevice = req.userDevice;
    const studentsWithCS548 = data.filter(student=> student.courses.some(course =>
       course.course_id === 'CS548' )).map(({ student_id})=>({student_id}));
       res.json({userIp, userDevice,studentsWithCS548})
});
studentInfo.post('/mycourses', (req, res) => { 
    
    const userIp= req.userIP;
    const userDevice = req.userDevice;
    const { student_id } = req.body; 
    const myCourses = data.find(s => s.student_id === student_id)?.courses.map(
        c => c.course_id).filter(id => id !== 'CS548') || []; 

    const matchingStudents = data.filter(student => student.courses.some(
        course => myCourses.includes(course.course_id))).map(({ student_id }) => ({ student_id })); 

    res.json({userIp,userDevice,matchingStudents}); 

}); 



export default studentInfo;