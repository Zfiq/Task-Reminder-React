
import {useState} from 'react'
// setState for each Input field 





const AddTask = ({onAdd}) => {       // Pass addTast prop from Ap

const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)


const onSubmit = (e)=> {
e.preventDefault()
// form validation 

if(!text){

    alert("Please add task")
    return
}  // Clear all if no task added
onAdd({text,day,reminder})
setText('')
setDay('')
setReminder(false)

}


    return (
        <form className="add-form"  onSubmit={onSubmit}>

        <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task" 
            value={text}
            onChange={(e)=> setText(e.target.value) }
            />
       </div>

       <div className="form-control">
            <label>Day & Time</label>
            <input type="text" placeholder="add Day & Tome" 
            value={day}
            onChange={(e)=> setDay(e.target.value) }  
            />
       </div>

       <div className="form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" 
             checked={reminder}
             value={reminder}
             onChange={(e)=> setReminder(e.currentTarget.checked)}   
            />
       </div>

       <input type="submit" value="Save Task" className="btn btn-block"/>

        </form>
    )
}

export default AddTask
