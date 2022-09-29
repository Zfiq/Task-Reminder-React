import {FaTimes} from 'react-icons/fa'  // import font Awesome closing icon X npm i react-icons.


const Task = ({task, onDelete, onToggle}) => {     // Catch that prop you must remember whic prop you would like to pass.
    return (                             // Destructrualise Aurg
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
        
        onDoubleClick={() => onToggle(task.id)}>



            <h3>{task.text} <FaTimes style={{color:"red", cursor: 'pointer'}} 

            onClick={() => onDelete(task.id)} />
            
            </h3>

            <p>{task.day}</p>

        </div>
    )
}


export default Task
