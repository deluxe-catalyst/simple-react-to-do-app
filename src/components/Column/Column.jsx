import classes from './Column.module.css';
import plusSvg from '@/assets/svg/plus.svg';
import Task from '../Task/Task';


export default function Column({ columnTitle, columnId, tasksArr, updTaskId, updColumnId}) {

    function changeColumnId(taskId) {
      updTaskId(taskId)
    }

    function columnDragOver(){
      updColumnId(columnId)
    }

    return (
        <div 
            className={classes.column} 
            id={columnId} 
            onDragOver={columnDragOver}
        >
            <div className={classes.column__box}>
                <h2 className={classes.column__title}>{columnTitle}</h2>
                <img src={plusSvg} alt="Добавить задачу" />
            </div>
            <div className={classes.line}></div>
            <div className={classes.column__taskbox}>
                {tasksArr.map((task) =>
                    (columnId === task.columnId ?
                        <Task
                            key={task.id}
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            date={task.date}

                            handleDragTask={changeColumnId}
                        />
                        :
                        undefined
                    ))}
            </div>
        </div>
    );
}