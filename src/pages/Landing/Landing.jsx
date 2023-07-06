import React from 'react'
import styles from "../../assets/css/landing.module.css"
import IntroSection from './IntroSection'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import deepDuck from "../../assets/images/deepDuck.png"

const Landing = () => {
  return (
    <div className={styles.LandingContainer}>
      <Navbar
        deepDuck={deepDuck}
        optionColor="#888888"
      />
      <IntroSection />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  )
}

export default Landing
