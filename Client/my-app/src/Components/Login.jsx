import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import './Regi.css';

export const Login = () => {
const navigate = useNavigate();
  const [data,setData]= useState({
    phone:'',
    password:'',
  })

  const LoginUser = async (e)=>{
    e.preventDefault();
    const {phone,password}=data
    try {
      const {data} = await axios.post('/login',{
        phone,
        password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({});
        navigate('/');
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <div className="form">
      <form onSubmit={LoginUser}>
        <input type='number' placeholder='Enter your phone no' value={data.phone} onChange={(e)=>setData({...data,phone:e.target.value})}></input>
        <label>Password</label>
        <input type='password' placeholder='Enter your password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}></input>
        <button type='submit'>Login</button>
      </form>
    </div>
    </>
  )
}
