import React from 'react'
import Navbar from '../../components/Navbar'
import deepDuck from "../../assets/images/blackDeepDuck.png"
import image from "../../assets/images/imageSwap-before.png"
import arrow from "../../assets/images/arrowBtn.png"

const ImageSwap = () => {
  const divStyles = {
    padding: "08px 30px",
    margin: "10px",
    width: "100%",
    display: "flex",
    alignItems: "center",
  }
  return (

    <div style={{
      background: "#B4FFE3",
      height: "633px"
    }}>
      <Navbar
        deepDuckImage={deepDuck}
        optionColor="black"
      />

      <div style={{
        display: "flex",
        margin: "05px 20px",
        padding: "20px",
        fontFamily: "Raleway"
      }}>
        <div style={divStyles}>
          <div style={{
          }}>
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
            >Try Swap It</button>
            <img src={arrow} height="19px" width="70px" />
          </div>
        </div>
        <div style={divStyles}>
          <img src={image} />
        </div>
      </div>
    </div>
  )
}

export default ImageSwap
