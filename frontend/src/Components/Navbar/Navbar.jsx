import React from 'react'
import Styles from "./Navbar.module.css"
import { Link } from 'react-router-dom'


const Navbar = () => {

  const IsName = localStorage.getItem("name")

  return (
    <div className={Styles.navbar}>
    <p className={Styles.logo}>logo</p>
        
        {IsName ? 
        
        <div className={Styles.dashboard}>
        
          <div className={Styles.left}>
            <Link className={Styles.link} to="/home">Home</Link>
            <Link className={Styles.link} to="/emp">Empolyee List</Link>
          </div>

          <div className={Styles.right}>
            <p>username</p>
            <button className={Styles.btn}>Logout</button>
          </div>

        </div>

        :

        <p className={Styles.loginpage}>LoginPage</p>
        }
    </div>
  )
}

export default Navbar