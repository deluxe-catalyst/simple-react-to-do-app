

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Taskpage from './components/Taskpage/Taskpage.tsx';
import Homepage from './components/Homepage/Homepage.tsx'
import Page404 from './components/Page404/Page404.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/task/:id" element={<Taskpage  />} />
          <Route path="*" element={<Page404  />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
