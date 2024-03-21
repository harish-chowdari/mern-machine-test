import React from 'react'
import Styles from "./Home.module.css"



const Home = () => {
  return (
    <form className={Styles.container}>
      <p className={Styles.create}>Create Employee</p>
      
      <div className={Styles.content}>

        <div className={Styles.input}>
          <p>Name</p>
          <input type='text' />
        </div>

        <div className={Styles.input}>
          <p>Email</p>
          <input type='text' />
        </div>

        <div className={Styles.input}>
          <p>Mobile No</p>
          <input type='text' />
        </div>

        <div className={Styles.input}>
          <p>Designation</p>
          <select>
            <option>HR</option>
            <option>Manager</option>
            <option>Sales</option>
          </select>
        </div>

        <div className={Styles.radio}>
          <p>Gender</p>
            
            <div>
              
              <div>
              <input type='radio' id='male' name='gender' value='male' />
              <label htmlFor='male'>Male</label>
              </div>

              <div>
                <input type='radio' name='gender' id='female' value="female" />
                <label htmlFor='female'>F</label>
              </div>
            </div>
        </div>

        <div className={Styles.checkbox}>
          <p>Course</p>
          <div className={Styles.checkboxes}>
              
              <div>
              <input type='checkbox' id='mba' />              
              <label htmlFor='mba'>MBA</label>
              </div>

              <div>
              <input type='checkbox' id='bca' />
              <label htmlFor='bca'>BCA</label>
              </div>

              <div>
              <input type='checkbox' id='bsc' />
              <label htmlFor='bsc'>BSC</label>
              </div>

          </div>
        </div>

        <div className={Styles.input}>
          <p>Img Upload</p>
          <input type='text' />
        </div>

      <button>Submit</button>
      </div>
    </form>
  )
}

export default Home