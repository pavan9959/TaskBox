import React,{useState} from  "react" 
import Taskform from "./Taskform"
import axios from "axios"

    const Edittask=(props)=>{
        const {id,title,status,edititem}=props

        const Formsubmit=(task)=>{
            axios.put(`http://localhost:3033/api/tasks/${task.id}`,task)
                .then((response)=>{
                    const data1=response.data
                    edititem(data1)
                })
                .catch((err)=>{
                    alert(err.message)
                })
        }

        return <div>
            <h2>Edit task</h2>
            <Taskform id={id} title={title} status={status} func={Formsubmit}  />
        </div>
    }

export default Edittask