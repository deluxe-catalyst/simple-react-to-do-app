import classes from './Column.module.css';
import plusSvg from '@/assets/svg/plus.svg';
import Task from '../Task/Task';

import { updateTasks, setColumnId, setTaskId, } from '@/features/taskSlice';
import { useDispatch } from 'react-redux';
import { TaskInterface } from '@/types/interfaces';

interface ColumnProps{
  columnTitle : string,
  columnId : string,
  tasksArr : TaskInterface[],
}

export default function Column({ columnTitle, columnId, tasksArr } : ColumnProps) {

  const TASKS_IN_COLUMN_ARRAY : TaskInterface[] = [];
  const dispatch = useDispatch();

  function changeColumnId(taskId : Number) {
    dispatch(setTaskId(taskId));
    dispatch(updateTasks());
  }

  function columnDragOver() {
    dispatch(setColumnId(columnId));
  }

  tasksArr.forEach((task : TaskInterface) => {
    if (task.columnId === columnId) {
      TASKS_IN_COLUMN_ARRAY.push(task);
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
        {TASKS_IN_COLUMN_ARRAY && TASKS_IN_COLUMN_ARRAY.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            date={task.date}

            handleDragTask={changeColumnId}
          />
        ))}
        {TASKS_IN_COLUMN_ARRAY.length == 0 && <h1 className={classes.empty}>Перетащите задачу сюда</h1>}
      </div>
    </div>
  );
}