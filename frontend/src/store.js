import {createStore, combineReducers,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getEmployeeReducer, postEmployeeReducer } from './reducer/EmpReducer';

const rootReducer = combineReducers({
    postEmployeeReducer: postEmployeeReducer,
    getEmployeeReducer: getEmployeeReducer
})
const initialState = {}

const middleware = [thunk];

const store = createStore(rootReducer, initialState,composeWithDevTools(applyMiddleware(...middleware)));
export default store;