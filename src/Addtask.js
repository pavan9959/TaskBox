import React,{useState} from "react" 
import Taskform from "./Taskform" 
import axios from "axios"

const Addtask=((prpos)=>{
    const {additem}=prpos


    const formsubmit=(task)=>{
        axios.post("http://localhost:3033/api/tasks",task)
            .then((response)=>{
                const data=response.data
                additem(data)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }


    return (
        <div>
            <h2>Add task</h2>
            <Taskform func={formsubmit}/>
        </div>
    )
})
export default Addtask