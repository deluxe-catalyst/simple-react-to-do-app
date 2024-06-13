import classes from './Task.module.css'

export default function Task({title, description, date, id, handleDragTask}){


    return(
        <div 
            className={classes.task}
            draggable="true"
            onDragStart={() => handleDragTask(id)}
        >
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h3>{date}</h3>
        </div>
    )
}