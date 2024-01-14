import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import SigninForm from './Pages/SigninForm';
import SignUp from './Pages/SignUp';
import Error from './Pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<SigninForm/>}/>

          <Route path='/' element={<Home/>} />

          <Route path='*' element={<Error/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App