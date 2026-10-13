import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../home/Home'
import Navbar from '../components/Navbar'
import './App.css'
import Departments from '../departments/Departments'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/Departments' element={<Departments />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
