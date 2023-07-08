import backgroudImage from "../../assets/images/gifSwap-section1.png"
import Navbar from "../../components/Navbar"
import deepDuck from "../../assets/images/deepDuck.png"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"

const GifSwap = () => {
    return (
        <>
            <div style={{
                 backgroundImage: `url(${backgroudImage})`,
                 height: "633px",
                 backgroundSize: 'cover',
                 backgroundPosition: 'center',
                 margin: "0px"
            }}>
                <Navbar
                    deepDuckImage={deepDuck}
                    optionColor= "#888888"
                />
                <div style={{
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    width : "auto",
                    fontFamily: "Raleway",
                    margin: "6%  50% 6% 10%"
                }}>
                    <h1>GIF Face Swap</h1>
                    <p>Swap a face on your favorite GIFS today and be the hero of your text threads!</p>
                    <button
                    style={{
                        width: "162px",
                        background: "#FFD600",
                        padding: "15px 25px" ,
                        border:"none",
                        outline: "none",
                        borderRadius: "12px",
                        color: "white",
                        fontSize:"17px",
                        fontWeight: "700"
                    }}
                    >Try Swap It</button>
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
