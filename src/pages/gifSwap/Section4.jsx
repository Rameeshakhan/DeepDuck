import { useNavigate } from 'react-router-dom';
import image from "../../assets/images/gifSwap-section4.png"
import styles from '../../assets/css/res.module.css';

const Section4 = () => {
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
          onClick={() => navigate('/gifswap')}
        >
          &gt;&gt;TRY NOW
        </p>
      </div>
    </div>
  );
};

export default Section4;

