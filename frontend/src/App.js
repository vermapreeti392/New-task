import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import AddEmployee from './components/Add Employee/AddEmployee';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>        
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addEmployee' element={<AddEmployee/>}></Route>        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
