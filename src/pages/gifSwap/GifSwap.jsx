import backgroudImage from "../../assets/images/gifSwap-section1.png"
import Navbar from "../../components/Navbar"
import deepDuck from "../../assets/images/deepDuck.png"
import picture from "../../assets/images/gifSwap1-section1.png"
import styles from "../../assets/css/res.module.css"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import { useNavigate } from "react-router-dom"

const GifSwap = () => {
    const navigate = useNavigate
    return (
        <>
            <div
            className={styles.gifMainSection}
            >
                <Navbar
                    deepDuckImage={deepDuck}
                    optionColor= "#888888"
                />
                <div
                className={styles.gifSectionMainSection}
                >
                    <h1>GIF Face Swap</h1>
                    <p>Swap a face on your favorite GIFS today and be the hero of your text threads!lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    <button
                    style={{
                        width: "162px",
                        padding: "15px 25px" ,
                        border:"none",
                        outline: "none",
                        borderRadius: "12px",
                        color: "white",
                        fontSize:"17px",
                        fontWeight: "700",
                        background: "#FFD600",
                        margin :"20px 0px ",
                        cursor:"pointer",
                    }}
                    onClick={()=> navigate("/gifswap")}
                    >Try Swap It</button>
                    <img src={picture} alt="picture" className={styles.gifMainSectionPicture}/>
                </div>
            </div>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
        </>
    )
}

export default GifSwap
