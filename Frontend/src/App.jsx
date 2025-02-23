import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import UserLogin from './pages/userLogin'
import UserSignup from './pages/userSignup'
import CaptainLogin from './pages/captainLogin'
import CaptainSignup from './pages/captainSignup'
import { UserDataContext } from './context/UserContext'


const App = () => {


  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/login' element={<UserLogin/> } />
        <Route path='/signup' element={<UserSignup/> } />
        <Route path='/captain-signup' element={<CaptainSignup/> } />
        <Route path='/captain-login' element={<CaptainLogin/> } />
      </Routes>
    </div>
  )
}

export default App