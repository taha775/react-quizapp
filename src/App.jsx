import React from 'react'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import Login from './Login'
import Quiz from './Quiz'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (    <>



  
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/Quiz" element={<Quiz/>}/>

</Routes>
<ToastContainer /> {/* Render ToastContainer at the root level */}
    </>
  )
}

export default App
