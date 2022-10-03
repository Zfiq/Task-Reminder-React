import Task from './Task'

const Tasks = ({tasks , onDelete,onToggle})=>{     // pass or catch the prop from App.js
                                                     // passing Destructured prop.

return (
        <>

            {tasks.map((task) => (                   // Loop through json details which is in App.js
                                                     //tasks is a prop for <Task /> component which is passing a prop
              <Task key={task.id} task={task} 
              onDelete={onDelete} 
              onToggle={onToggle}/>
       ))}
            </>
         )
        }

export default Tasks
