import { useEffect,useState} from "react"
import axios from 'axios'

function List(){
    const[data,setData] = useState([])
    const[editing,setEditing] = useState(false)
    const[editdata,setEditData] = useState(null)
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todo/').then((res)=>{
            console.log(res.data);
            setData(res.data)

        }).catch(error=>console.log(error.message))
    },[])
    const Edit_dtls=(task)=>{
        setEditing(true)
        setEditData(task)
    }
    return(
        <div className="container">
            <h1>display details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Titile</th>
                        <th>Discriptiion</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.task}</td>
                            <td>{value.description}</td>
                            <td>{value.completed ? 'completed':'not'}</td>
                            <td><button className="btn btn-outline-info" onClick={()=>{Edit_dtls(value)}}>Edit</button></td>
                            <td><button className="btn btn-outline-danger">delete</button></td>                            
                        </tr>
                     ))}
                </tbody>

            </table>
            {editing ? <EditForm curTask={editdata}/>:null}
        </div>
    )
}

const EditForm=({curTask})=>{
    const [task,setTask]= useState(curTask)
    return(
        <form>
            <input type="text" name="title" id="title" value={task.task}/>
            <input type="text" name="discription" id="discriptin" value={task.description}/>
            <input type="submit" value="Update"/>
        </form>
    )
}
export default List