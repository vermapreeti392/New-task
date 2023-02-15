import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase/Firebase';
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userInfo) => {
        localStorage.setItem('userInfo', email);
        window.location.href = '/'

      }).catch(e => console.log(e))
  }

  return (
    <div className='container-signup'>
      <form className='signup-form' action="" onSubmit={loginHandler}>
        <div className="inp h1">
          <h1><img src={require('../../imgs/logo.png')} alt="" /></h1>
        </div>
        <div className="h4">
          <h4>Enter your credentials</h4>
        </div>
        <div className='inp'>
          <label htmlFor="email">Email</label>
          <input type="email" className='email input' placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
        </div>
        <div className='inp'>
          <label htmlFor="password">Password</label>
          <input type="password" className='password input' placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
        </div>
        <div className='inp'>
          <button className='signup input' type="submit">Login</button>
        </div>
        <div className="dont-acc">
          Don't have an account ?
          <span style={{ color: "blue", cursor: "pointer", fontSize: "16px" }} onClick={() => { navigate('/signUp') }}> {"  "}SignUp</span>
        </div>
      </form>
    </div>
  )
}
