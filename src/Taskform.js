import React,{useState} from "react" 
import {v4 as uuidv4} from "uuid"
import Edittask from "./Edittask"

const Taskform=((props)=>{
    const {func,id:slno,title:tasktitle,status:taskstaus}=props
    const [id,setid]=useState(slno?slno:uuidv4())
    const [title,settitle]=useState(tasktitle?tasktitle:"")
    const [status,setstatus]=useState(taskstaus?taskstaus:false)
    


    const handel_submit=(e)=>{
        e.preventDefault()
        const formdata={
            id:id,
            title:title,
            status:status
        }
        func(formdata)
        setid(uuidv4())
        settitle("")
        // Formsubmit(formdata)
    }

    const handel_title_change=(e)=>{
        settitle(e.target.value)
    }

    const handel_status=(e)=>{
        setstatus(e.target.checked)
    }

    return (
        <div>
            <form onSubmit={handel_submit}>
                <label>Title</label><br/>
                <input type="text" value={title} onChange={handel_title_change}></input><br/>
                <input type="checkbox" checked={status} onChange={handel_status} /><label>completed</label><br/>
                <input type="submit"/>
            </form>
        </div>
    )
})
export default Taskform