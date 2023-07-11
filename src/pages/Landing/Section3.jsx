// import React from 'react';
// import image1 from "../../assets/images/video-swap.png";
// import stroke from "../../assets/images/stick.png";
// import arrow from "../../assets/images/arrowBtn.png";
// import { useNavigate } from 'react-router-dom';
// import styles from "../../assets/css/res.module.css"
// const Section3 = () => {

//     const navigate = useNavigate()

//     const divStyle = {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     };

//     return (
//         <>
//               <div>
//                 <div className={styles.section3main} >
//                     <div style={divStyle}>
//                     <img src={image1} className={styles.section3image}alt="videoSwap" />
//                     </div>
//                     <div style={divStyle}>
//                     <div
//                         className={styles.section3content}
//                         >
//                             <h2 >Video Face Swap</h2>
//                             <img src={stroke} alt="stroke" />
//                         </div>
//                         <p>
//                         Quite possibly the most fun of them all, swapping faces on a video is now the new AI craze! Find your favorite video and go to town.
//                         </p>
//                         <button style={{
//                             border: "none",
//                             outline: "none",
//                             borderRadius: "12px",
//                             background: "#FFD600",
//                             color: "white",
//                             padding: "10px 30px",
//                             fontSize: "17px",
//                             margin: "20px 20px 20px 0px"
//                         }}
//                         onClick={()=> navigate("/videoswap")}
//                         >Try Video Swap</button>
//                         <img src={arrow} alt="arrow" />

//                     </div>

                   
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Section3;



import React from 'react';
import image1 from "../../assets/images/video-swap.png";
import stick from "../../assets/images/stick.png";
import arrow from "../../assets/images/arrowBtn.png";
import { useNavigate } from 'react-router-dom';
import styles from "../../assets/css/res.module.css"

const Section4 = () => {
    const navigate = useNavigate()

    const divStyles = {
        // margin: "10px",
        padding: "10px 10px 10px 10px",
        width: "100%",
        display: "flex",
        flex: 1,
        // border: "1px solid white",
        alignItems: "center"
    };

    return (
        <>
            <div
            className={styles.section3main}
            >
                <div style={divStyles}>
                <img src={image1} alt="Image" 
                className={styles.section3image}/>
                </div>

                <div style={divStyles}>
                <div
                    className={styles.section2Content}
                    >
                        <div style={{
                            display: "flex",
                            gap: "0px", 
                            color: "white"
                        }}>
                            <h1>Video Swap</h1>
                            <img src={stick} height="70px" width="41px"/>
                        </div>
                        <p
                            style={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "white"
                            }}
                        >Quite possibly the most fun of them all, swapping faces on a video is now the new AI craze! Find your favorite video and go to town. </p>
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
                                    fontWeight: "700",
                                    cursor:"pointer"
                                }}

                                onClick={()=> navigate("/videoswap")}
                            >Try Video Swap</button>
                            <img src={arrow} height="17px" width="60px" className={styles.btnArrow} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Section4;

