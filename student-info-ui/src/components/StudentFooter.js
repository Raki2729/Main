import React ,{useState,useEffect}from 'react'
import  axios from 'axios'


export const StudentFooter = (props)=>{
    const {isStudentInfo,isSpringBreak,isSummerBreak} = props
    const [isFallClassReady, setisFallClassReady]= useState(false)
    const [count, setCount] = useState(0)
    const [studentInfoData, setStudentInfoData]= useState(null)
    const [studentInfoError, setStudentInfoError]= useState(false)
    
    const fetchStudentInfoAPI = async()=>{
            try{
            const response =await axios.post('https://localhost:8000/https-web-service/v1/course', {course: '485'})

              setStudentInfoData(response?.data)
            }catch{
               setStudentInfoError(true) 
            }
        }
    useEffect(()=>{
        console.log("Hello From useEffect Hooks")
        
        fetchStudentInfoAPI()
    },[count])
// JS function
const handleClick = ()=>{
    if(isSummerBreak){
        setisFallClassReady(!isFallClassReady)
        setCount(count + 1)
    }
}
console.log(count, "count")
console.log(studentInfoData,"this is the student")
console.log(studentInfoError,"this is the error")
    return(
        // HTML and CSS
        <>Student Footer
        <span>
            Clicked: {count}
        </span>
        <span>
            student info is : {studentInfoData}
        </span>
        <button onClick = {handleClick}>Check</button>
        </>
    )
}