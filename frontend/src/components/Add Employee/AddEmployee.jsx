import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postEmployees } from '../../action/EmployeeAction';
export default function AddEmployee() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState('');
    const postEmpState = useSelector((state)=>state.postEmployeeReducer);
    const {success, error} = postEmpState;
    const dispatch = useDispatch();
    const addEmployee = (e)=>{
        e.preventDefault();
        // console.log(name,email,city,zipcode);
        const emp = {name, email, city, zipcode}
        dispatch(postEmployees(emp));
        setName('')
        setEmail('')
        setCity('')
        setZipcode('')
        navigate('/')
    }
    return (        
        <Container>
            {success && <h6>Successfully inserted</h6>}
            {error && <h6>Error</h6>}
            <Form onSubmit={addEmployee}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => { setName(e.target.value) }} value={name} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  onChange={(e) => { setEmail(e.target.value) }} value={email}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="city" onChange={(e) => { setCity(e.target.value) }} value={city}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicZipcode">
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control type="text" placeholder="Enter zipcode" onChange={(e) => { setZipcode(e.target.value) }} value={zipcode}/>                
                </Form.Group>                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
