import React ,{useState, useEffect} from "react"
import axios from "axios"
import TaskList from "./TaskList"
import Addtask from "./Addtask"


const TaskContainer=(prpos)=>{
    // state
    const [tasks,settasks]=useState([])

    const removeitem=(id)=>{
        const data=tasks.filter((ele)=>{
            return ele.id!=id
        })
        settasks(data)
    }

    const edititem=(task)=>{
        const result=tasks.map((ele)=>{
            if(ele.id==task.id){
                return {...ele,...task}
            }
            else{return {...ele}}
        })
        settasks(result)
    }


    useEffect(()=>{
        axios.get("http://localhost:3033/api/tasks")
            .then((response)=>{
                const data1=response.data
                
                settasks(data1)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[])

    const additem=(task)=>{
        settasks([...tasks,task])////////////doubt
    }


    return (
        <div>
            <h1>Task Box</h1>
                <TaskList tasks={tasks} removeitem={removeitem} edititem={edititem}/>
                <Addtask additem={additem}/>
        </div>
    )
}
export default TaskContainer