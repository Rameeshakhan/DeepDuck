import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ImageSwap from './pages/imageSwap/ImageSwap'
import VideoSwap from './pages/videoSwap/VideoSwap'
import GifSwap from './pages/gifSwap/GifSwap'
import Policy from './pages/Policy/Policy'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/imageswap" element={<ImageSwap />} />
          <Route path="/videoswap" element={<VideoSwap />} />
          <Route path="/gifswap" element={<GifSwap />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
