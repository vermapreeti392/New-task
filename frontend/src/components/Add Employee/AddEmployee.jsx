import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import { postEmployees } from '../../action/EmployeeAction';
export default function AddEmployee() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState('');    
    const dispatch = useDispatch();
    const addEmployee = (e)=>{
        e.preventDefault();        
        const emp = {name, email, city, zipcode}
        dispatch(postEmployees(emp));
        setName('')
        setEmail('')
        setCity('')
        setZipcode('')        
        window.location.href = "/";      
    }
    return (
       <div className='container-signup'>
            <form action="" className='signup-form' onSubmit={addEmployee}>
            <div className='inp'>
                <label htmlFor="name">Name</label>
                <input type="name" className='name input' placeholder="Enter name" onChange={(e) => { setName(e.target.value) }} value={name} />
            </div>
            <div className='inp'>
                <label htmlFor="email">Email</label>
                <input type="email" className='email input' placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
            </div>
            <div className='inp'>
                <label htmlFor="City">City</label>
                <input type="city" className='password input' placeholder="city" onChange={(e) => { setCity(e.target.value) }} value={city} />
            </div>
            <div className='inp'>
                <label htmlFor="Zipcode">Zipcode</label>
                <input type="zipcode" className='password input' placeholder="Zipcode" onChange={(e) => { setZipcode(e.target.value) }} value={zipcode} />
            </div>
            <div className='inp'>
            <button className='signup input' type="submit">Submit</button>
            </div>
            </form>
       </div>
    )
}
