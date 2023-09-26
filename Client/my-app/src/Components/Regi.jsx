import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Regi.css';

export const Regi = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: '', // Add gender field
    country: '', // Add country field
    age: '', // Add age field
  });

  const RegisterUser = async (e) => {
    e.preventDefault();
    const {name,email,phone,password,gender,country,age}=data
    try {
      const {data}= await axios.post('/regi',{
        name,email,phone,password,gender,country,age
      })
      if (data.error) {
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success('Login successful')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div className="form">
        <form onSubmit={RegisterUser}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <label>Phone no</label>
          <input
            type="number"
            placeholder="Enter your phone no"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          {/* Gender Field */}
          <label>Gender</label>
          <div>
            <input
              type="radio"
              id="Male"
              name="gender"
              value="Male"
              checked={data.gender === 'Male'}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="Male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="Female"
              name="gender"
              value="Female"
              checked={data.gender === 'Female'}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="Female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="Other"
              name="gender"
              value="Other"
              checked={data.gender === 'Other'}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="Other">Other</label>
          </div>

          {/* Country Field */}
          <label>Country</label>
          <select
  value={data.country}
  onChange={(e) => setData({ ...data, country: e.target.value })}
>
  <option value="">Select</option>
  <option value="Bahrain">Bahrain</option>
  <option value="Bangladesh">Bangladesh</option>
  <option value="India">India</option>
  <option value="Indonesia">Indonesia</option>
  <option value="Japan">Japan</option>
  <option value="Malaysia">Malaysia</option>
  <option value="Nepal">Nepal</option>
  <option value="Pakistan">Pakistan</option>
  <option value="Singapore">Singapore</option>
  <option value="South Korea">South Korea</option>
  <option value="Sri Lanka">Sri Lanka</option>
  <option value="Taiwan">Taiwan</option>
  {/* Add more countries as needed */}
</select>


          {/* Age Field */} 
          <label>Age</label>
          <input
            type="number"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
