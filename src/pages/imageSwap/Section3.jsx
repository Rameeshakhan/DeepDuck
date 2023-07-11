import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/images/imageSwap-got.png';
import styles from '../../assets/css/res.module.css';

const Section3 = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div 
      className={styles.section3}
      style={{
        background: "white"
      }}
      >
        <h1 className={styles.title}>
          Master the Art of the Swap with Deep Duck!
        </h1>
        <p className={styles.description}>
          Everyone is getting in on the AI craze. Test your abilities today with
          our one-of-a-kind swap tool, found only on Deep Duck. Nothing to be
          embarrassed about! Remember, all of your creations remain encrypted
          and for your eyes only.
        </p>
        <img src={image} alt="Image" className={styles.image} />

        <p
          className={`${styles.action} ${styles.clickable}`}
          onClick={() => navigate('/imageupload')}
        >
          &gt;&gt;TRY NOW
        </p>
      </div>
    </div>
  );
};

export default Section3;
