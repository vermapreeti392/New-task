import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees } from '../../action/EmployeeAction';
import Login from '../Login/Login';

export default function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const empState = useSelector((state) => state.getEmployeeReducer);
  const { loading, employees, error } = empState;  
  
  let login = localStorage.getItem('userInfo')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])
  //console.log(login);
   return (
    <>
    {!login ? <Login/> :
    <Container fluid>
      <Button variant="primary" onClick={handleShow}>
        Home
      </Button> &nbsp;
      <Button variant="primary" onClick={()=>{
        if(window.confirm("Do you really want to logout")){
          
        }
        }>
        Logout
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Employee Panel</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Please click on add Employee button to add employee data.</p>
          <Link to="/addEmployee"><Button variant='success'>Add Employee</Button></Link>
        </Offcanvas.Body>
      </Offcanvas>
      <Container>
        {loading && <h6>Loading...</h6>}
        {error && <h6>Error...</h6>}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Zipcode</th>
            </tr>
          </thead>
          <tbody>
            {employees && (employees.map((emp,index)=>{
              return <tr key={index}>
                <td>{emp._id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.city}</td>
                <td>{emp.zipcode}</td>
              </tr>
            }))}
          </tbody>
        </Table>
      </Container>
    </Container>}
    </>
  )
}
