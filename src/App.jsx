
import { useSelector } from 'react-redux';
import Header from './components/Header/Header'
import Column from './components/Column/Column'
import './App.css'

function App() {

  const columns = useSelector((state)  => state.columns.columnsData);
  const tasks = useSelector((state) => state.tasks.tasks);

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

export default App
