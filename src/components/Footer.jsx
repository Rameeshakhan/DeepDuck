import React from 'react'
import { BiSolidPhone, BiLogoWhatsapp } from 'react-icons/bi';
import { BsFacebook } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import styles from "../assets/css/footer.module.css"
import linkedin from "../assets/images/linkedIn.png"
import twitter from "../assets/images/twitter.png"

const Footer = () => {
    return (
        <>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>
                    <div className={styles.div1}>
                        <p> Contact Us</p>
                        <div className={styles.div1Item}>
                            <HiOutlineMail size="20px"/>
                        </div>
                        <div className={styles.div1Item}>
                            <BiSolidPhone size="20px" />
                        </div>
                        <div className={styles.div1Item}>
                            <BiLogoWhatsapp size="20px" />
                        </div>
                    </div>
                </div>
                <div className={styles.gridItem}>
                    <div className={styles.div1}>
                        <p> Social Media</p>
                        <div className={styles.div1Item}>
                            <BsFacebook size="20px"/>
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
                        <p>Legal</p>
                        <div className={styles.div3Item}>
                            <p>Terms and Services</p>
                        </div>
                        <div className={styles.div3Item}>
                           <p> Privacy Policy</p>
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