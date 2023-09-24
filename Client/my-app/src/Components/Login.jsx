import React from 'react'
import { useState } from 'react';
import axios from 'axios';
export const Login = () => {

  const [data,setData]= useState({
    phone:'',
    password:'',
  })

  const LoginUser = (e)=>{
    e.preventDefault();
    axios.get('/')
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
