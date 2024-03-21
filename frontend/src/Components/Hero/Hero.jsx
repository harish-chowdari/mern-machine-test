import React from 'react'
import Styles from "./Hero.module.css"



const Hero = () => {
  return (
    <div> <div className={Styles.loginPage}>
        
    <div className={Styles.username}>
      <p>UserName</p>
      <input type='text' />
    </div>

    <div className={Styles.password}>
      <p>Password</p>
      <input type='password' />
    </div>

    <button>Login</button>

  </div></div>
  )
}

export default Hero