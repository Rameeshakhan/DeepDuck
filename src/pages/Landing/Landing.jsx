import React from 'react'
import styles from "../../assets/css/landing.module.css"
import IntroSection from './IntroSection'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import deepDuck from "../../assets/images/deepDuck.png"
import Section2 from "./Section2"
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'

const Landing = () => {
  return (
    <div className={styles.LandingContainer}>
      <Navbar
        deepDuckImage={deepDuck}
        optionColor="#888888"
      />
      <IntroSection />
      <div
     style={{
      // padding: "40px"
     }} 
      >
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
      <Section7/>
      </div>
      <Footer color="white" />
    </div>
  )
}

export default Landing
