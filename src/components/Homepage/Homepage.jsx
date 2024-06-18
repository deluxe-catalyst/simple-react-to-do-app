import Header from '@/components/Header/Header'
import Column from '@/components/Column/Column'
import classes from  './Homepage.module.css';
import { useSelector } from 'react-redux';
function Homepage() {

    const columns = useSelector((state) => state.columns.columnsData);
    const tasks = useSelector((state) => state.tasks.tasks);
    console.log(tasks)
    return (
        <>
            <Header />
            <main>
              {columns.map((column) => (
                <Column
                  key={column.columnId}
                  columnTitle={column.columnTitle}
                  columnId={column.columnId}
    
                  tasksArr={tasks}
                />
              ))}
            </main>
        </>
      )

}

export default Homepage