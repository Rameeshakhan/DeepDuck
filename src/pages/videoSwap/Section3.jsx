import React from 'react'
import TomCruise from "../../assets/images/TomCruise.png"

// const Section3 = () => {
//   return (
//     <div>
//        <div style={{
//         // border: "1px solid white",
//         background:"#1A1A1A",
//         fontFamily: "Raleway",
//         textAlign: "center",
//         padding: "30px"
//     }}>
//       <h1 style={{

//         fontSize: "40px",
//         fontWeight: "600",
//         lineHeight: "47px",
//         letterSpacing: "0em",

//       }}>Deep Duck provides very accurate results.</h1>
//       <p style={{
//         fontSize: "14px",
//         fontWeight: "500",
//         lineHeight: "19px",
//         letterSpacing: "0em",        
//       }}
//       >Enjoy near perfect results using our one-of-a-kind face swap tool.</p>
//       <img style={{
//         margin: "30px"
//       }}src={TomCruise}/>

//       <p style={{
//         fontFamily: "Raleway",
//         fontSize: "20px",
//         fontWeight: "700",
//         lineHeight: "30px",
//         letterSpacing: "0em",
//         textAlign: "center",
//         color:"#FFD600",
//       }}>{`>>TRY NOW`}</p>
//     </div>
//     </div>
//   )
// }

// export default Section3
import { useNavigate } from 'react-router-dom';
import image from "../../assets/images/TomCruise.png"
import styles from '../../assets/css/res.module.css';

const Section3 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className={styles.section3}
        stlye={{
          backgroundColor: "#1A1A1A", 
        }}
      >
        <h1 className={styles.title} style={{
          color: "white"
        }}>
          Deep Duck provides very accurate results.
        </h1>
        <p
        style={{
          color: "white"
        }}
        className={styles.description}>
          Enjoy near perfect results using our one-of-a-kind face swap tool.
        </p>
        <img src={image} alt="Image" className={styles.image} />

        <p
          className={`${styles.action} ${styles.clickable}`}
          onClick={() => navigate('/videoswap')}
        >
          &gt;&gt;TRY NOW
        </p>
      </div>
    </div>
  );
};

export default Section3;
