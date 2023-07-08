import React from 'react';
import deepDuck from "../../assets/images/deepDuck.png";
import Navbar from '../../components/Navbar';
import ResponsiveTable from "../payment/Table"
import Section7 from '../Landing/Section7';
import Footer from '../../components/Footer';

const Payment = () => {
    const info = {
        border: "1px solid white",
        padding: "10px",
        color: "white",
        textAlign: "left",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: "12px",
        position: "relative",
        margin: "20px 0px"
    };

    const firstDiv = {
        flexBasis: "85%",
        alignItems: "center",
        margin: "10px"
    };
    const secondDiv = {
        flexBasis: "15%",
        margin: "10px",
        textAlign: "center"
    };

    const decor = {
        textDecoration: "line-through",
        color: "#464646"
    };

    const colorBox = {
        position: "absolute",
        top: "0%",
        left: "04%",
        transform: "translate(-50%, -50%)",
        width: "70px",
        height: "30px",
        backgroundColor: "#F3CC00",
        textAlign: "center",
        borderRadius: "10px"
    };

    const btnStyle = {
        width: "100%",
        height: "103px",
        background: "#03A9F4",
        fontWeight: "900",
        fontSize: "40px",
        border: "none",
        outline: "none",
        color: "white",
        margin: "20px 0px",
        borderRadius: " 10px"
    }

    const buy = {
        border: "none",
        color: "white",
        outline: "none",
        background: "#FFD600",
        padding: "15px 40px",
        borderRadius: "20px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        margin: "40px auto 10px auto",
        fontSize: "18px",
        fontFamily: "Raleway"
    }

    return (
        <div style={{ background: "black" }}>
            <Navbar deepDuckImage={deepDuck} optionColor="#888888" />
            <div
                style={{
                    background: "#1F1F1F",
                    margin: "30px 40px",
                    padding: "50px",
                    borderRadius: "12px",
                    fontFamily: "Raleway",
                    color: "white"
                }}
            >
                <h3 style={{ textAlign: "center" }}>Premium Plans</h3>
                <div style={info}>
                    <div style={firstDiv}>6 months</div>
                    <div style={secondDiv}>
                        $ 90.55
                        <br />
                        <span style={decor}>$ 150.55</span>
                    </div>
                    <div style={colorBox}>60% off</div>
                </div>
                <div style={info}>
                    <div style={firstDiv}>12 months</div>
                    <div style={secondDiv}>
                        $ 450.55
                        <br />
                        <span style={decor}>$ 500.55</span>
                    </div>
                    <div style={colorBox}> 5% off</div>
                </div>
                <button style={btnStyle}>Stripe</button>
                <div>
                </div>
                <div style={{ background: "#3B3B3B" }}>
                    <ResponsiveTable />
                </div>
                <button style={buy}>Buy Credits </button>
            </div>
            <Section7 />
            <Footer color="white" />
        </div>

    );
};

export default Payment;
