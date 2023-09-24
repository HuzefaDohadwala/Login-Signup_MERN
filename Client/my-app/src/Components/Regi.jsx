import React, { useState } from 'react';

export const Regi = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: '', // Add gender field
    country: '', // Add country field
    age: '', // Add age field
  });

  const RegisterUser = (e) => {
    e.preventDefault();
    // Here you can access all the user's data including gender, country, and age
    console.log(data);
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
              id="male"
              name="gender"
              value="male"
              checked={data.gender === 'male'}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={data.gender === 'female'}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={data.gender === 'other'}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="other">Other</label>
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
          <label>Date of Birth</label>
          <input
            type="date"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
