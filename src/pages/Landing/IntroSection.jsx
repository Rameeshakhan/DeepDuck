import React from 'react';
import backgroundImage from "../../assets/images/stride.png";
import logo from "../../assets/images/h1-heading.png";
import arrowDirection from "../../assets/images/arrowBtn.png";
import styles from '../../assets/css/landing.module.css';
import image1 from "../../assets/images/image1.png"
import image2 from "../../assets/images/section1-smile.png"
import image3 from "../../assets/images/section1-funny.png"
import image4 from "../../assets/images/section1-model1.png"
import image5 from "../../assets/images/section1-model2.png"
import image6 from "../../assets/images/section1-kid.png"

const IntroSection = () => {

  return (
    <div
      className={styles['intro-section-container']}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: "no-repeat",
        height: "720px",
      }}
    >
      <div className={styles['grid-container']}>
        <div className={styles['grid-item']}>
          <div className={styles.leftside}>
            <h2>Swap It!</h2>
            <p>Face swapping on an Image, Video or GIF is as easy as 1-2-3! Start your AI journey today!</p>
            <div className={styles.btnArrow}>
              <button className={styles.swapBtn}>Try Swap It</button>
              <img className={styles.arrow} src={arrowDirection} />
            </div>
          </div>
        </div>
        <div className={styles['grid-item']}>
          <img src={logo} alt="Logo" className={styles.image} />
        </div>
      </div>
      <div className={styles.SixInlineDiv}>
        <div className={styles.divItem}>
          <img className={styles.img} src={image1} />
          <p className={styles.desc}>Swap expression</p>
        </div>
        <div className={styles.divItem}>
          <img className={styles.img} src={image2} />
          <p className={styles.desc}>Swap Smile</p>
        </div>
        <div className={styles.divItem}>
          <img className={styles.img} src={image3} />
          <p className={styles.desc}>Funny Swap</p>

        </div>
        <div className={styles.divItem}>
          <img className={styles.img} src={image4} />
          <p className={styles.desc}>Model Swap</p>

        </div>
        <div className={styles.divItem}>
          <img className={styles.img} src={image5} />
          <p className={styles.desc}>Model Swap</p>
        </div>
        <div className={styles.divItem}>
          <img className={styles.img} src={image6} />
          <p className={styles.desc}>Try with kid</p>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
