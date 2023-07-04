import React from 'react'
import styles from "../../assets/css/landing.module.css"
import IntroSection from './IntroSection'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Landing = () => {
  return (
    <div className={styles.LandingContainer}>
      <Navbar/>
      <IntroSection/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default Landing
