import classes from './Task.module.css'
import {Link} from 'react-router-dom'
export default function Task({title, description, date, id, handleDragTask}){

    

    return(
        <Link to={`/task/${id}`}>
            <div 
                className={classes.task}
                draggable="true"
                onDragEnd={() => handleDragTask(id)}
            >
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>{date}</h3>
            </div>
        </Link>
    )
}