import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./Components/Login/Login.jsx"
import Home from "./Components/Home/Home.jsx"
import EmpList from "./Components/EmpList/EmpList.jsx"
import Dashboard from './Components/Dashboard/Dashboard.jsx'



const App = () => {
  return (
    <div>
    

      
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/admin' element={<Dashboard/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/emp' element={<EmpList/>} />
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App