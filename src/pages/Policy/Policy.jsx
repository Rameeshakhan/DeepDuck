import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Terms from './Terms';
import Privacy from './Privacy';
import arrow from "../../assets/images/tryArrow.png"
import Footer from "../../components/Footer"
import deepDuck from "../../assets/images/deepDuck.png"

const Policy = () => {
  const [activeTab, setActiveTab] = useState('terms');

  const gradientText = {
    background: "linear-gradient(0deg, #0E33BE, #14C483, #FFD600, #FF5757)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    display: "inline-block",
    "font-size": "24px",
    "font-weight": "bold",
    "line-height": "1"
};


  const btnStyle = {
    border: 'none',
    outline: 'none',
    background: 'none',
    color: '#6E6E6E',
    fontFamily: 'Raleway',
    margin: '10px 30px'
  };

  const activeStyle = {
    border: 'none',
    outline: 'none',
    background: '#2B2B2B',
    fontFamily: 'Raleway',
    margin: '10px 40px',
    borderRadius: '20px',
    color: 'white',
    padding: '12px 23px'
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div style={{ background: 'black' }}>
       <Navbar
                    deepDuckImage={deepDuck}
                    optionColor= "#888888"
                />
      <button
        style={activeTab === 'terms' ? activeStyle : btnStyle}
        onClick={() => handleTabChange('terms')}
      >
        Terms of services
      </button>
      <button
        style={activeTab === 'privacy' ? activeStyle : btnStyle}
        onClick={() => handleTabChange('privacy')}
      >
        Privacy policy
      </button>
      <div
        style={{
          margin: '50px',
          padding: '05%',
          borderRadius: '20px',
          background: '#1F1F1F',
          color: 'white'
        }}
      >
        {activeTab === 'terms' ? <Terms /> : <Privacy />}
      </div>
      <div style={{
                    margin:"4% 8%",
                    padding: "3% 6%",
                    background:"#1F1F1F",
                    borderRadius: "800px",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    height: "157px",
                    color: "white"
                }}>
                    <h2>Try It <span style={gradientText}>NOW!!!</span></h2>
                    <div>
                    <img src={arrow} alt="Arrow"/> 
                    <button style={{
                        background: "#FFD600",
                        color: "white",
                        padding: "10px 30px",
                        borderRadius: "15px",
                        border: "none",
                        outline: "none",
                        fontSize: "25px",
                        margin: "0px 10px"
                    }}>Swap It</button>
                    </div>
                </div>
           <Footer color="white"/>
    </div>
  );
};

export default Policy;
