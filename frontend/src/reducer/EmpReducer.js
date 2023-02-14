export const postEmployeeReducer = (state = {}, action) => {
    switch (action.type) {
        case "POST_EMPLOYEE_REQ":
            return {

                loading: true
            }
        case "POST_EMPLOYEE_SUCCESS":
            return {
                success: true,
                loading: false
            }
        case "POST_EMPLOYEE_FAILED":
            return {
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}


export const getEmployeeReducer = (state = { employees: [] }, action) => {
    switch (action.type) {
        case "GET_EMPLOYEE_REQ":
            return {
                ...state,
                loading: true
            }
        case "GET_EMPLOYEE_SUCCESS":
            return {
                employees: action.payload,
                loading: false
            }
        case "GET_EMPLOYEE_FAILED":
            return {
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}


