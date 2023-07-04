import React from 'react';
import backgroundImage from "../../assets/images/stride.png";
import logo from "../../assets/images/h1-heading.png";
import arrowDirection from "../../assets/images/arrowBtn.png";
import trySec1 from "../../assets/images/image1.png"

const IntroSection = () => {
    return (
        <div
            style={{
                position: 'relative',
                background: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px',
                marginTop: '70px',
                paddingBottom: "30px",
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: 'auto',
                gridGap: '20px',
            }}
        >
            <section>
                <div
                    style={{
                        position: 'relative',
                        transform: 'translateY(-50%)',
                        padding: '20px',
                        margin: "10%",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: 'Raleway',
                            fontSize: '32px',
                            fontWeight: 600,
                            lineHeight: '36px',
                            letterSpacing: '0em',
                            color: '#ffffff',
                            marginBottom: '20px',
                        }}
                    >
                        Swap It!
                    </h1>
                    <p
                        style={{
                            fontFamily: 'Raleway',
                            fontSize: '14px',
                            fontWeight: 400,
                            lineHeight: '19px',
                            letterSpacing: '0em',
                            textAlign: 'left',
                        }}
                    >
                        Face swapping on an Image, Video, or GIF is as easy as 1-2-3! Start your AI journey today!
                    </p>
                    <button
                        style={{
                            fontFamily: 'Raleway',
                            fontSize: '14px',
                            fontWeight: 600,
                            lineHeight: '16px',
                            letterSpacing: '0em',
                            padding: '10px 20px',
                            background: '#FFD600',
                            color: '#ffffff',
                            cursor: 'pointer',
                            outline: 'none',
                            border: 'none',
                            borderRadius: '12px',
                            marginRight: '20px',
                        }}
                    >
                        Try Swap It
                    </button>
                    <img src={arrowDirection} alt="Arrow" />
                </div>
            </section>
            <section>
                <div
                    style={{
                        position: 'relative',
                        textAlign: 'center',
                        // marginTop: "-15px"
                    }}
                >
                    <img src={logo} alt="Logo" height="358.53px" width="395.27px" />
                </div>
            </section>
            <section>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: "0px auto",
                        padding: "10px"
                    }}
                >
                    <div
                        style={{
                            border: '5px solid #25282C',
                            borderBottom: "10px solid #25282C",
                            padding: "0",
                            height: "auto",
                            borderRadius: "15px",
                            alignItems: "center"
                        }}>
                        <img src={trySec1} alt="image1"
                            height="103px"
                            width="151px"
                            style={{
                                padding:"0px",
                                margin: "0px"
                            }} />
                        <p
                            style={{
                                fontFamily: "Raleway",
                                fontSize: "12px",
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0em",
                                margin:"0px",
                                padding: "0px",
                                background: "#25282C",
                                textAlign: "center",
                            }}
                        >Swap expression</p>
                    </div>

                    <div
                        style={{
                            border: '5px solid #25282C',
                            borderBottom: "10px solid #25282C",
                            padding: "0",
                            height: "auto",
                            borderRadius: "15px",
                            alignItems: "center"
                        }}>
                        <img src={trySec1} alt="image1"
                            height="103px"
                            width="151px"
                            style={{
                                padding:"0px",
                                margin: "0px"
                            }} />
                        <p
                            style={{
                                fontFamily: "Raleway",
                                fontSize: "12px",
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0em",
                                margin:"0px",
                                padding: "0px",
                                background: "#25282C",
                                textAlign: "center",
                            }}
                        >Swap expression</p>
                    </div>
                    <div
                        style={{
                            border: '5px solid #25282C',
                            borderBottom: "10px solid #25282C",
                            padding: "0",
                            height: "auto",
                            borderRadius: "15px",
                            alignItems: "center"
                        }}>
                        <img src={trySec1} alt="image1"
                            height="103px"
                            width="151px"
                            style={{
                                padding:"0px",
                                margin: "0px"
                            }} />
                        <p
                            style={{
                                fontFamily: "Raleway",
                                fontSize: "12px",
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0em",
                                margin:"0px",
                                padding: "0px",
                                background: "#25282C",
                                textAlign: "center",
                            }}
                        >Swap expression</p>
                    </div>
                    <div
                        style={{
                            border: '5px solid #25282C',
                            borderBottom: "10px solid #25282C",
                            padding: "0",
                            height: "auto",
                            borderRadius: "15px",
                            alignItems: "center"
                        }}>
                        <img src={trySec1} alt="image1"
                            height="103px"
                            width="151px"
                            style={{
                                padding:"0px",
                                margin: "0px"
                            }} />
                        <p
                            style={{
                                fontFamily: "Raleway",
                                fontSize: "12px",
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0em",
                                margin:"0px",
                                padding: "0px",
                                background: "#25282C",
                                textAlign: "center",
                            }}
                        >Swap expression</p>
                    </div>
                    <div
                        style={{
                            border: '5px solid #25282C',
                            borderBottom: "10px solid #25282C",
                            padding: "0",
                            height: "auto",
                            borderRadius: "15px",
                            alignItems: "center"
                        }}>
                        <img src={trySec1} alt="image1"
                            height="103px"
                            width="151px"
                            style={{
                                padding:"0px",
                                margin: "0px"
                            }} />
                        <p
                            style={{
                                fontFamily: "Raleway",
                                fontSize: "12px",
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0em",
                                margin:"0px",
                                padding: "0px",
                                background: "#25282C",
                                textAlign: "center",
                            }}
                        >Swap expression</p>
                    </div>
                    <div
                        style={{
                            border: '5px solid #25282C',
                            borderBottom: "10px solid #25282C",
                            padding: "0",
                            height: "auto",
                            borderRadius: "15px",
                            alignItems: "center"
                        }}>
                        <img src={trySec1} alt="image1"
                            height="103px"
                            width="151px"
                            style={{
                                padding:"0px",
                                margin: "0px"
                            }} />
                        <p
                            style={{
                                fontFamily: "Raleway",
                                fontSize: "12px",
                                fontWeight: "400",
                                lineHeight: "16px",
                                letterSpacing: "0em",
                                margin:"0px",
                                padding: "0px",
                                background: "#25282C",
                                textAlign: "center",
                            }}
                        >Swap expression</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntroSection;
