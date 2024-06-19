import Header from '@/components/Header/Header'
import Column from '@/components/Column/Column'
import classes from  './Homepage.module.css';
import { useSelector } from 'react-redux';
import { RootStateInterface } from '@/types/interfaces';


function Homepage() {

    const columns = useSelector((state : RootStateInterface) => state.columns.columnsData);
    const tasks = useSelector((state : RootStateInterface) => state.tasks.tasks);
  
    
    return (
        <>
            <Header />
            <main className={classes.mainbox}>
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