import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/Firebase'
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
        <Container>
        <Form onSubmit ={signupHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setEmail(e.target.value) }} value={email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Signup
      </Button>   
      
    </Form>
    </Container>
    )
}
