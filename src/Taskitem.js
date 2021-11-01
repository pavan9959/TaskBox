import React,{useState} from "react" 
import axios from "axios"
import Edittask from "./Edittask"

const Taskitem=((props)=>{
    const {id,title,removeitem,status,edititem}=props
    const [toogle,settoogle]=useState(false)

    const handel_toogle=()=>{
        settoogle(!toogle)
    }

    const handel_remove=()=>{
        const remove=window.confirm("Are u shure")
        axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response)=>{
                const data1=response.data.id
                removeitem(data1)
            })
            .catch((err)=>{
                alert(err.message)
            })
    }


    return <div> 
        {toogle?(<div><Edittask id={id} title={title} status={status} edititem={edititem}/>
                <button onClick={handel_toogle}>cancel</button></div>
                ):( 
                        <div>
                            <h3>{title}</h3>
                            <button onClick={handel_toogle}>Edit</button>
                            <button onClick={handel_remove}>remove</button>
                        </div>)
        }
            </div>
                            

})
export default Taskitem