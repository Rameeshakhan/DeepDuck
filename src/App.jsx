import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
