import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees } from '../../action/EmployeeAction';
import Login from '../Login/Login';
import './home.css'

export default function Home() {
  const navigate = useNavigate()
  const empState = useSelector((state) => state.getEmployeeReducer);
  const { loading, employees, error } = empState;

  let login = localStorage.getItem('userInfo')
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])
  const handleAddemp = () => {
    navigate('/addEmployee')
  }

  return (
    <>
      {!login ? <Login /> :
        <div className='home-cont'>
          <section className="nav">
            <button className='logout' onClick={() => {
              if (window.confirm("Do you really want to logout")) {
                localStorage.removeItem('userInfo')
                window.location.href = '/'
              }
            }
            }>Logout</button>
          </section>
          <section className="sidebar">
            <button className='add-emp' onClick={handleAddemp}>Add Employee</button>
          </section>
          <section className='home'>
            {loading && <h6>Loading...</h6>}
            {error && <h6>Error...</h6>}
            <Table striped bordered hover className='emptable'>
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
                {employees && (employees.map((emp, index) => {
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
          </section>
        </div>
      }
    </>
  )
}
