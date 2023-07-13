import React ,{useEffect}from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Landing2 from './pages/Landing/Landing2'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import ImageSwap from './pages/imageSwap/ImageSwap'
import VideoSwap from './pages/videoSwap/VideoSwap'
import GifSwap from './pages/gifSwap/GifSwap'
import Policy from './pages/Policy/Policy'
import ImageUpload from './pages/imageSwap/ImageUpload'
import Payment from './pages/payment/Payment'
import Gallery from './pages/Gallery'
import { useLocation } from 'react-router-dom';

  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }
const App = () => {


  return (
    <div>
      <BrowserRouter>
       <ScrollToTop/>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/main" element={<Landing2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/imageswap" element={<ImageSwap />} />
          <Route path="/videoswap" element={<VideoSwap />} />
          <Route path="/gifswap" element={<GifSwap />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/imageupload" element={<ImageUpload/>} />
          <Route path="/pricing" element={<Payment/>} />
          <Route path="/gallery" element={<Gallery/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
