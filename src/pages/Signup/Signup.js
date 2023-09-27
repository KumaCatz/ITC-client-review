import './Signup.css'
// import { useState } from "react";
import Btn from '../../UIKit/Elements/Btn/Btn';
import React, { useState } from 'react';

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };

  const handleSubmit=async (e)=>{
        e.preventDefault();

        const { email, password } = formData;

        try {
        const response = await fetch('https://64be4a645ee688b6250c2373.mockapi.io/:Tweets', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            // Handle success
            console.log('Data posted successfully');
        } else {
            // Handle errors
            console.error('Error posting data');
        }
        } catch (error) {
        console.error('Error posting data:', error);
        }
    }

  return (
    <div classname='signup'>
        <div>Sign-up</div>
        <form className='signup-form' onSubmit={handleSubmit}>
      <h2>Sign-up</h2>
      <div>
        <label className='signup-label1'>Email:</label>
        <input className='signup-input1'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label className='signup-label2'>Password:</label>
        <input className='signup-input2'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>
      <div classname='btns-container'>
        <Btn type="submit">Login</Btn>

      </div>
      
    </form>

    </div>
  );
};

export default Signup;
