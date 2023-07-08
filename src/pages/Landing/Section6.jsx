import React from 'react';
import image1 from "../../assets/images/data.png";
import stick from "../../assets/images/lock.png";


const Section6 = () => {

    const divStyles = {
        margin: "10px",
        padding: "10px 20px 10px 20px",
        width: "100%",
        display: "flex"
    };

    return (
        <>
            <div style={{
                background: "White",
                padding: "06%",
                display: "flex" 
            }}>
                <div style={divStyles}>
                <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        color: "black",
                        fontFamily: "Raleway",
                    }}>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px", 
                        }}>
                            <h1
                                style={{
                                    margin: "0px",
                                    fontSize: "40px",
                                    fontWeight: "600"
                                }}
                            >Your Data is Safe.</h1>
                            <img src={stick} height="70px" width="90px" />
                        </div>
                        <p
                            style={{
                                fontSize: "12px",
                                fontWeight: "500"
                            }}
                        >With our one-of-a-kind Creation Locker, your data remains safe, and in your own private, for your eyes only encrypted cloud.</p>
                       
                    </div>
                </div>
                <div style={divStyles}>
                <img src={image1} alt="Image" />
                </div>
            </div>
        </>
    );
};

export default Section6;
