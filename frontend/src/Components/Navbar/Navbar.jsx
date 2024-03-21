import React, { useState, useEffect } from 'react'
import Styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'




const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const IsName = localStorage.getItem("userName")
    setIsLoggedIn(IsName) 
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("userName")
    setIsLoggedIn(false) 
  }

  return (
    <div className={Styles.navbar}>
      
      <p className={Styles.logo}>logo</p>
        
      {isLoggedIn ? 
        <div className={Styles.dashboard}>

          <div className={Styles.left}>
           
            <Link className={Styles.link} to="/home">Home</Link>
            <Link className={Styles.link} to="/emp">Employee List</Link>

          </div>

          <div className={Styles.right}>

            <p>{localStorage.getItem("userName")}</p>
            <Link to="/">
            <button onClick={handleLogout} className={Styles.btn}>Logout</button>
            </Link>

          </div>

        </div>
        : 
        
        null
      }
    </div>
  )
}

export default Navbar
