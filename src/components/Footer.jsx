import { BiSolidPhone, BiLogoWhatsapp } from 'react-icons/bi';
import { BsFacebook } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import styles from "../assets/css/footer.module.css"
import linkedin from "../assets/images/linkedIn.png"
import twitter from "../assets/images/twitter.png"
import { useNavigate } from 'react-router-dom';

const Footer = (color) => {
    const navigate = useNavigate()

    return (
        <>
            <div className={styles.gridContainer} style={color}>
                <div className={styles.gridItem}>
                    <div className={styles.div1}>
                        <p> Contact Us</p>
                        <div className={styles.div1Item}>
                            <HiOutlineMail size="20px" style={{ color: "white" }} />
                        </div>
                        <div className={styles.div1Item}>
                            <BiSolidPhone size="20px" style={{ color: "white" }} />
                        </div>
                        <div className={styles.div1Item}>
                            <BiLogoWhatsapp size="20px" style={{ color: "white" }} />
                        </div>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.div1}>
                        <p> Social Media</p>
                        <div className={styles.div1Item}>
                            <BsFacebook size="20px" style={{ color: "white" }} />
                        </div>
                        <div className={styles.div1Item}>
                            <img src={linkedin} />
                        </div>
                        <div className={styles.div1Item}>
                            <img src={twitter} />
                        </div>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.div3}>
                        <p onClick={()=>navigate("/policy")}>Legal</p>
                        <div className={styles.div3Item}>
                            <p onClick={()=>navigate("/policy")}>Terms and Services</p>
                        </div>
                        <div className={styles.div3Item}>
                            <p onClick={()=>navigate("/policy")}> Privacy Policy</p>
                        </div>
                        <div className={styles.div13tem}>
                            <p> Refund Policy</p>
                        </div>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.div3}>
                        <p>Support</p>
                        <div className={styles.div3Item}>
                            <p>FAQ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
