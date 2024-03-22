import React, {useState,useEffect} from 'react'
import axios from 'axios'



//export const ClassHeader = ({isClassSchedule,isSpringBreak,isSummerBreak}) =>{
export const ClassHeader = (props)=>{
     const{isClassSchedule,isSpringBreak,isSummerBreak}=props
     const [isFallClassReady, setIsFallClassReady] = useState(false)
     const [count,setCount] = useState(0)
     const [classRoomData, setClassRoomData] = useState(null)
     const [classRoomError, setClassRoomError] = useState(false)
     const [isLoading, setIsLoading] = useState(false)
     
     const fetchClassRoomAPI = async()=>{
        try{
            setIsLoading(true)
            const response =await axios.post('https://localhost:3000/https-web-service/v1/classroom',{course: "CS548"})

            setClassRoomData(response?.data)
        }
        catch{
            setClassRoomError(true)
        }
        finally{
            setIsLoading(false)
        }
        
    }
     useEffect(()=>{
        console.log("Hello From useEffect Hooks")
        
        fetchClassRoomAPI()
     },[count])

    //JS function
//console.log("Hello From Class Header",isClassSchedule,isSpringBreak,isSummerBreak)

const handleClick = () =>{
    if(isSummerBreak){
        setIsFallClassReady(!isFallClassReady)
        setCount(count + 1)
    }
}
//console.log(isFallClassReady, 'isFallClassReady')
console.log(count,"count")

console.log(classRoomData, "this is the classroom")
console.log(classRoomError, "this is the error")
    return(
        //HTML and CSS
        <>Class Header
        <span>
            Clicked : {count}
        </span>
        <span>
            class room is :{classRoomData?.classroom}
        </span>
        <button onClick={handleClick}>Check</button>
        </>
        
    )
}