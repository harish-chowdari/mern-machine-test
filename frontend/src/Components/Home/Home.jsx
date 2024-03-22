import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import Styles from './Home.module.css';
import upload_area from "../../Components/assets/upload_area.svg"


const Home = () => {

  const [image,setImage] =React.useState(null)

  const [selectedImage, setSelectedImage] = React.useState(null);

  
  const [formDetails, setformDetails] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    courses: [],
    image: ''
  });


  const imageHandler = (e)=>{
    setImage(e.target.files[0])
    
  }

  const handleImageClick = (imageURL) => {
    setSelectedImage(imageURL);
  }


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformDetails(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ?
        checked ? [...prevData[name], value] : prevData[name].filter(course => course !== value) :
        value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const formData = new FormData()
      formData.append('product', image)

      const imageResponse = await axios.post('http://localhost:4005/api/upload', formData, {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
      })

      const response = await axios.post('http://localhost:4005/api/emp', {
        ...formDetails,
        image: imageResponse.data.image_url
    }); // Using Axios post method
      if (response.data.success) {
        alert('Form submitted successfully');
      }
      else
      {
        alert("error")
      }
      
      // You can perform further actions upon successful submission
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form');
    }
  };

  return (
    <form className={Styles.container} onSubmit={handleSubmit}>
      <p className={Styles.create}>Create Employee</p>
      <div className={Styles.content}>
        <div className={Styles.input}>
          <p>Name</p>
          <input type='text' name='name' value={formDetails.name} onChange={handleChange} />
        </div>
        <div className={Styles.input}>
          <p>Email</p>
          <input type='text' name='email' value={formDetails.email} onChange={handleChange} />
        </div>
        <div className={Styles.input}>
          <p>Mobile No</p>
          <input type='text' name='mobile' value={formDetails.mobile} onChange={handleChange} />
        </div>
        <div className={Styles.input}>
          <p>Designation</p>
          <select name='designation' value={formDetails.designation} onChange={handleChange}>
            <option>--Select--</option>
            <option value='HR'>HR</option>
            <option value='Manager'>Manager</option>
            <option value='Sales'>Sales</option>
          </select>
        </div>
        <div className={Styles.radio}>
          <p>Gender</p>
          <div>
            <input type='radio' id='male' name='gender' value='male' checked={formDetails.gender === 'male'} onChange={handleChange} />
            <label htmlFor='male'>Male</label>
            <input type='radio' name='gender' id='female' value='female' checked={formDetails.gender === 'female'} onChange={handleChange} />
            <label htmlFor='female'>Female</label>
          </div>
        </div>
        <div className={Styles.checkbox}>
          <p>Course</p>
          <div className={Styles.checkboxes}>
            <div>
              <input type='checkbox' id='mba' name='courses' value='MBA' onChange={handleChange} />
              <label htmlFor='mba'>MBA</label>
            </div>
            <div>
              <input type='checkbox' id='bca' name='courses' value='BCA' onChange={handleChange} />
              <label htmlFor='bca'>BCA</label>
            </div>
            <div>
              <input type='checkbox' id='bsc' name='courses' value='BSC' onChange={handleChange} />
              <label htmlFor='bsc'>BSC</label>
            </div>
          </div>
        </div>
        <div className={Styles.input}>
          <p>Img Upload</p>
          <label htmlFor='file-input'>
          <img width="100px"
            src={image ? URL.createObjectURL(image) : upload_area} alt='' />
      </label>
      <input  hidden type='file' 
              name='image' id='file-input'  onChange={imageHandler} />
        </div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default Home;
