import React from 'react'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App