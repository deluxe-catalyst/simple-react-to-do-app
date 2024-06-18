

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Taskpage from './components/Taskpage/Taskpage';
import Homepage from './components/Homepage/Homepage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/task/:id" element={<Taskpage  />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
