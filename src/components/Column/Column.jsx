import classes from './Column.module.css';
import plusSvg from '@/assets/svg/plus.svg';
import Task from '../Task/Task';
import { useEffect } from 'react';


export default function Column({ columnTitle, columnId, tasksArr, updTaskId, updColumnId}) {

    const columnArr = [];

    function changeColumnId(taskId) {
      updTaskId(taskId)
    }

    function columnDragOver(){
      updColumnId(columnId)
    }

    tasksArr.forEach(task => {
      if(task.columnId == columnId){
        columnArr.push(task);
      }
    });

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
                {columnArr && columnArr.map((task) => (
                  <Task
                      key={task.id}
                      id={task.id}
                      title={task.title}
                      description={task.description}
                      date={task.date}

                      handleDragTask={changeColumnId}
                  />
                ))}
                {columnArr.length == 0 && <h1 className={classes.empty}>Перетащите задачу сюда</h1>}
            </div>
        </div>
    );
}