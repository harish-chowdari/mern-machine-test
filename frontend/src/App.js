import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Hero from "./Components/Hero/Hero.jsx"
import Home from "./Components/Home/Home.jsx"
import EmpList from "./Components/EmpList/EmpList.jsx"



const App = () => {
  return (
    <div>
    

      
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/emp' element={<EmpList/>} />
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App