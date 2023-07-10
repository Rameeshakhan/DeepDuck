import React from 'react'
import Navbar from '../../components/Navbar'
import deepDuck from "../../assets/images/blackDeepDuck.png"
import image from "../../assets/images/imageSwap-before.png"
import arrow from "../../assets/images/arrowBtn.png"
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import { useNavigate } from 'react-router-dom'
import styles from "../../assets/css/res.module.css"

const ImageSwap = () => {

  const navigate=useNavigate()

  const divStyles = {
    padding: "08px 30px",
    margin: "10px",
    width: "100%",
    display: "flex",
    alignItems: "center",
  }
  return (
    <>
      <div style={{
        background: "#B4FFE3",
        height: "auto",
        marginBottom: "1%",
        overflowX: "hidden"
      }}>
        <Navbar
          deepDuckImage={deepDuck}
          optionColor="black"
        />

        <div 
        className={styles.imageSwapmain}
        >
          <div style={divStyles}>
            <div className={styles.imageSwapMainContent}>
              <h2 style={{
                fontWeight: "600",
                fontSize: "40px",
              }}>Image Face Swap</h2>
              <p style={{
                fontSize: "14px"
              }}>
                You’re joking? you’re joking? I can’t believe my eyes! Deep Duck offers 99.9% accuracy on all face swaps.
              </p>
              <button
                style={{
                  width: "162px",
                  background: "#FFD600",
                  padding: "15px 25px",
                  border: "none",
                  outline: "none",
                  borderRadius: "12px",
                  color: "white",
                  fontSize: "17px",
                  fontWeight: "700",
                  marginRight: "10px"
                }}
                onClick={()=> navigate("/imageupload")}
              >Try Swap It</button>
              <img src={arrow} height="19px" width="70px" />
              <br /><br /><br /><br /><br />
            </div>
          </div>
          <div style={divStyles}>
            <img src={image} className={styles.imageSwapImage} />
          </div>
        </div>
      </div>
      <Section2 />
      <Section3/>
      <Section4/>
    </>
  )
}

export default ImageSwap
