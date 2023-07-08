import React from 'react'
import styles from "../../assets/css/landing.module.css"
import IntroSection from './IntroSection'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import deepDuck from "../../assets/images/DeepDuck.png"
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
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6/>
      <Section7/>
      <Footer color="white" />
    </div>
  )
}

export default Landing
