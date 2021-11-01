import React from "react" 
import Taskitem from "./Taskitem"

const TaskList=(props)=>{
    const {tasks,removeitem,edititem}=props
    return (
        <div>
            {tasks.length===0 ?(
                <div> 
                    <h2>No task found</h2> 
                    <p>Add your first task</p>
                </div> 
            ): (
                <div>
                <h1>total task-{tasks.length}</h1>
                {tasks.map((ele,i)=>{
                    return <Taskitem {...ele} key={i} removeitem={removeitem} edititem={edititem} />
                })}
                </div>
                )}
        </div>
    )
}
export default TaskList