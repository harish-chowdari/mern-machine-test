import React from 'react'
import Styles from "./Login.module.css"
import axios from "axios"




const Login = () => {

  const [error, setError] = React.useState("")

  const [Details, setDetails] = React.useState({
    userName:"",
    password:""
  })

  const changeHandler = (e)=>{
    setDetails({...Details, [e.target.name] : e.target.value})
    setError("")
  }

  const submitHandler = async(e) =>{

    e.preventDefault()
  
    try 
    {
        const { userName, password } = Details;
        const res = await axios.post("http://localhost:4005/api/login", { userName, password });
        
        if(res.data.success)
        {
          alert("login successful")
          window.location.replace('/admin')
          localStorage.setItem("userName", res.data.userName)
        }

        else {
          setError("Incorrect credentials")
        }
        

    } 
    
    catch (error) 
    {
        console.error("Error:", error);
    }

  }

  return (
    <form onSubmit={submitHandler}>
      <div className={Styles.loginPage}>          
        
        <div className={Styles.username}>

          <p className={Styles.input}>UserName</p>
          <input type='text'
            name='userName'
            value={Details.userName}
            onChange={changeHandler}
            />

        </div>

        <div className={Styles.password}>

          <p className={Styles.input}>Password</p>
          <input type='password'
            name='password'
            value={Details.password}
            onChange={changeHandler} />
          
        </div>

        {error && <p className={Styles.error}>{error}</p>}

        <button>Login</button>

      </div>
      
    </form>
  )
}

export default Login