// import React from 'react';
// import image1 from "../../assets/images/gifSwap-section3.png";
// import stick from "../../assets/images/stick.png";
// import arrow from "../../assets/images/arrowBtn.png";


// const Section3 = () => {

//     const divStyles = {
//         margin: "10px",
//         padding: "20px 20px 10px 20px",
//         width: "100%",
//         display: "flex"
//     };

//     return (
//         <>
//             <div style={{
//                 background: "#1A1A1A",
//                 padding: "06%",
//                 display: "flex" 
//             }}>
//                 <div style={divStyles}>
//                 <div style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "center",
//                         color: "white",
//                         fontFamily: "Raleway",
//                     }}>
//                         <div style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "10px", 
//                         }}>
//                             <h1
//                                 style={{
//                                     margin: "0px",
//                                     fontSize: "40px",
//                                     fontWeight: "600"
//                                 }}
//                             >Swap Face From GIF</h1>
//                             <img src={stick} height="70px" width="41px" />
//                         </div>
//                         <p
//                             style={{
//                                 fontSize: "12px",
//                                 fontWeight: "500"
//                             }}
//                         >Have we mentioned that you need to use HIGH QUALITY images? This is the secret sauce to all face swap success stories. </p>
//                         <div style={{
//                             display: "flex",
//                             alignItems: "center", 
//                             gap: "10px", 
//                             margin: "40px 0px", 
//                         }}>
//                             <button
//                                 style={{
//                                     width: "162px",
//                                     background: "#FFD600",
//                                     padding: "15px 25px",
//                                     border: "none",
//                                     outline: "none",
//                                     borderRadius: "12px",
//                                     color: "white",
//                                     fontSize: "17px",
//                                     fontWeight: "700"
//                                 }}
//                             >Try Swap It</button>
//                             <img src={arrow} height="17px" width="60px" />
//                         </div>
//                     </div>
//                 </div>
//                 <div style={divStyles}>
//                 <img src={image1} alt="Image" />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Section3;


import React from 'react';
import image1 from "../../assets/images/gifSwap-section3.png";
import stick from "../../assets/images/stick.png";
import arrow from "../../assets/images/arrowBtn.png";
import { useNavigate } from 'react-router-dom';
import styles from "../../assets/css/res.module.css"

const Section3 = () => {
    const navigate = useNavigate()

    const divStyles = {
        margin: "10px",
        padding: "10px 20px 10px 20px",
        width: "100%",
        display: "flex",
        flex: 1,
        alignItems: "center"
    };

    return (
        <>
        <div >

       
            <div
            className={styles.section2main}
            style={{
                background: "#1A1A1A"
            }}
            >

<div style={divStyles}>
                <div
                    className={styles.section2Content}
                    >
                        <div style={{
                            display: "flex",
                            gap: "0px", 
                            color: "white"
                        }}>
                            <h1>Swap Face From GIF</h1>
                            <img src={stick} height="70px" width="41px"/>
                        </div>
                        <p
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "white"
                            }}
                        >Have we mentioned that you need to use HIGH QUALITY images? This is the secret sauce to all face swap success stories. </p>
                        <div style={{
                            display: "flex",
                            alignItems: "center", 
                            gap: "10px", 
                            margin: "20px 0px", 
                        }}>
                            <button
                                style={{
                                    width: "182px",
                                    background: "#FFD600",
                                    padding: "15px 25px",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "12px",
                                    color: "white",
                                    fontSize: "17px",
                                    fontWeight: "700"
                                }}

                                onClick={()=> navigate("/imageswap")}
                            >Try Image Swap</button>
                            <img src={arrow} height="17px" width="60px" className={styles.btnArrow} />
                        </div>
                    </div>
                </div>
                  <div style={divStyles}>
                <img src={image1} alt="Image" className={styles.section2image} />
                </div>

              
            </div>
            </div>
        </>
    );
};

export default Section3;

