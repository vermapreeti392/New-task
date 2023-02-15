import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/Firebase'
import './signup.css'

export default function Signup() {    
    const navigate = useNavigate();   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signupHandler = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userInfo)=>{            
            //console.log(userInfo);
            navigate('/');
        }).catch(e=>console.log(e))
    }
    return (   
   <div className='container-signup'>
        <form className='signup-form' action="" onSubmit ={signupHandler}>
        <div className="inp h1">
                <h1><img src={require('../../imgs/logo.png')} alt=""/></h1>
            </div>            
            <div className="p">
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
            <button className='signup input' type="submit">Signup</button>
            </div>
        </form>
   </div>
    )
}
