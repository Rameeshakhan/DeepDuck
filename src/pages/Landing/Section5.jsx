import React from 'react';
import Div1Pic from "../../assets/images/work-1.png"
import Div2Pic from "../../assets/images/work-2.png"
import Div3Pic from "../../assets/images/work-3.png"
import arrow from "../../assets/images/arrow.png"
import "../../assets/css/landing.module.css"

const Section5 = () => {
    const headingStyle = {
        background: "linear-gradient(90deg, #0E33BE 1.68%, #FF3545 94.11%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        color: "transparent",
        textFillColor: "transparent",
        WebkitTextFillColor: "transparent",
        fontSize: '1.5rem',
    };

    const gradient = {
        background: 'linear-gradient(0deg, #0E33BE, #14C483, #FFD600, #FF5757)',
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent'
    };

    const blockDivsStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 0px',
    };

    const divStyle = {
        flex: '1',
        textAlign: 'center',
        padding: '10px',
    };

    const rotateImageStyle = {
        flex: '0.6',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
    };

    const mediaQueryStyle = {
        '@media (max-width: 800px)': {
            display: 'block',
        },
    };

    const blockDivsWithMediaQueryStyle = {
        ...blockDivsStyle,
        ...mediaQueryStyle,
    };

    return (
        <div style={{
            background: "black",
            padding: "30px",
            color: "white",
            fontFamily: "Raleway"
        }}>

            <div style={{ textAlign: 'center' }}>
                <h1 style={gradient}>How It Works</h1>
                <p>Let your <span style={gradient}>imagination be your guide</span></p>
            </div>
            <div className="block-divs" style={blockDivsWithMediaQueryStyle}>
                <div style={divStyle}>
                    <img src={Div1Pic} alt="Step 1" />
                    <h3 style={headingStyle}>Step 1</h3>
                    <p>Upload your hero image</p>
                </div>
                <div className="rotate-image" style={rotateImageStyle}>
                    <img src={arrow} alt="Arrow" />
                </div>
                <div style={divStyle}>
                    <img src={Div2Pic} alt="Step 2" />
                    <h3 style={headingStyle}>Step 2</h3>
                    <p>Upload your base image/Video/Gif</p>
                </div>
                <div className="rotate-image" style={rotateImageStyle}>
                    <img src={arrow} alt="Arrow" />
                </div>
                <div style={divStyle}>
                    <img src={Div3Pic} alt="Step 3" />
                    <h3 style={headingStyle}>Step 3</h3>
                    <p>Wait for the AI magic</p>
                </div>
            </div>
        </div>
    );
};

export default Section5;
