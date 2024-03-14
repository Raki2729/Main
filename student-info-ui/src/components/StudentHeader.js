import React,{useState,useEffect} from 'react'



//export const StudentHeader = ({isStudentInfo,isSpringBreak,isSummerBreak})=>{
// JS function


export const StudentHeader= (props) =>{
    const {isStudentInfo,isSpringBreak,isSummerBreak} = props
    const [isFallClassReady, setisFallClassReady]= useState(false)
    const [count, setCount] = useState(0)
    
    useEffect(()=>{
        console.log("Hello From useEffect Hooks ")
    }, [count])
    
 console.log("Hello From Student Header",isStudentInfo,isSpringBreak,isSummerBreak)

    

 const handleClick = ()=>{
    if(isSummerBreak){
        setisFallClassReady(true)
        setCount(count +1)
    }
    
 }

 console.log(isFallClassReady, 'isFallClassReady')
 console.log(count, "count")
    return(
        // HTML and CSS
        <>Student Header
        <span>
            Clicked: {count}
        </span>
        <button onClick = {handleClick}>Check</button>
        </>
    )
}