import axios from 'axios'
export const postEmployees = (employee) => async (dispatch) => {
    dispatch({ type: 'POST_EMPLOYEE_REQ' })
    try {
        await axios.post('http://localhost:5000/addEmployee', employee)
        //console.log(res);
        dispatch({ type: 'POST_EMPLOYEE_SUCCESS' })
    } catch (error) {
        dispatch({ type: 'POST_EMPLOYEE_FAILED', payload: error })
    }
}
export const getEmployees = () => async (dispatch) => {
    dispatch({ type: 'GET_EMPLOYEE_REQ' })
    try {
        const res = await axios.get('http://localhost:5000/')
        
        dispatch({ type: 'GET_EMPLOYEE_SUCCESS', payload: res.data })
    } catch (error) {
        dispatch({ type: 'GET_EMPLOYEE_FAILED', payload: error })
    }
}