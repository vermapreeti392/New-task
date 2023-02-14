import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from "react";
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase/Firebase';
export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userInfo)=>{          
           localStorage.setItem('userInfo',email);
             window.location.href='/'
            
        }).catch(e=>console.log(e))
    }
    
  return (  
    <Container>
        <Form onSubmit={loginHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>{setEmail(e.target.value)}} value={email} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={password}/>
      </Form.Group>      
      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Text className="text-muted">
          Don't have an account ?
          <span style={{color : "blue", cursor : "pointer", fontSize: "16px"}} onClick={()=>{navigate('/signUp')}}> {"  "}SignUp</span>  
        </Form.Text>
      </Form.Group>
    </Form>
    </Container>
  )
}
