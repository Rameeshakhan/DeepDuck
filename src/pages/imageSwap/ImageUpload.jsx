import React, { useState , useEffect} from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import deepDuck from '../../assets/images/blackDeepDuck.png';
import styles from './ImageUpload.module.css';
import video from '../../assets/images/video.png';
import gif from '../../assets/images/gif.png';
import Modal from '../../components/Modal'
import ConfirmEmail from '../payment/ConfrimEmail';
import PayAsYouGo from '../payment/PayAsYouGo';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {

  const navigate = useNavigate()
  const [baseImage, setBaseImage] = useState(null);
  const [inputImage, setInputImage] = useState(null);
  const [baseImageUploaded, setBaseImageUploaded] = useState(false);
  const [inputImageUploaded, setInputImageUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const [showPayAsYouGo, setShowPayAsYouGo] = useState(false);

  const handleBaseImageUpload = (event) => {

    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBaseImage(reader.result);
        setBaseImageUploaded(true);
      };
      reader.readAsDataURL(file);
      event.target.value = '';
    }
  };

  const handleInputImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setInputImage(reader.result);
        setInputImageUploaded(true);
      };
      reader.readAsDataURL(file);
      // Reset input
      event.target.value = '';
    }
  };

  const handleFaceSwap = () => {
    setIsLoading(true);
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          setIsLoading(false);
        }
        return prevProgress + 10;
      });
    }, 500);
  };

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setIsConfirmEmail(true)
  };

  const closeEmailConfirm=()=>{
    setIsConfirmEmail(false)
    setShowPayAsYouGo(true)
  }

  const closePayAsYouGo = () => {
    setShowPayAsYouGo(false)
  }
  return (
    <div>
      <Navbar deepDuckImage={deepDuck} optionColor="black" />
      <div className={styles.box}>
        <div className={styles.side}>
          <h2 className={styles.heading}>Image Swap</h2>
          <h6 className={styles.tyrthhese}>Try These</h6>
          <img src={video} className={styles.sideelement}  alt="Video" onClick={() => navigate("/videoswap")}/>
          <img src={gif} className={styles.sideelement}  alt="GIF"  onClick={() => navigate("/gifswap")}/>
        </div>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <div className={styles.block}>
              <div className={styles.insideblock}>
                {baseImage ? (
                  <img src={baseImage} alt="Base Image" className={styles['uploaded-image']} />
                ) : (
                  <>
                    <input type="file" className={styles['file-input']} id="baseImageInput" onChange={handleBaseImageUpload} />
                    <label htmlFor="baseImageInput" className={styles['file-label']}>
                      <span className={styles['plus-icon']}><i className="fas fa-plus" /></span>
                    </label>
                  </>
                )}
              </div>
              <div className={styles.insideblock2}>
                <p className={styles.step1}>Step 1</p>
                {baseImageUploaded ? (
                  <p>Uploaded</p>
                ) : (
                  <>
                    <p><b>Click</b> or <b>Drag</b></p>
                    <p>To upload a <b>Base Image</b></p>
                    <p className={styles.requirment}>File requirements</p>
                    <p className={styles.mb}>1pc max count   5 mb image size</p>
                  </>
                )}
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.insideblock}>
                {inputImage ? (
                  <img src={inputImage} alt="Input Image" className={styles['uploaded-image']} />
                ) : (
                  <>
                    <input type="file" className={styles['file-input']} id="inputImageInput" onChange={handleInputImageUpload} />
                    <label htmlFor="inputImageInput" className={styles['file-label2']}>
                      <span className={styles['plus-icon2']}><i className="fas fa-plus" /></span>
                    </label>
                  </>
                )}
              </div>
              <div className={styles.insideblock2}>
                <p className={styles.step1}>Step 2</p>
                {inputImageUploaded ? (
                  <p>Uploaded</p>
                ) : (
                  <>
                    <p><b>Click</b> or <b>Drag</b></p>
                    <p>To upload an <b>Input Image</b></p>
                    <p className={styles.requirment}>File requirements</p>
                    <p className={styles.mb}>1pc max count   5 mb image size</p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className={styles.rightSide}>
            <button className={styles.btn} onClick={handleFaceSwap} disabled={isLoading}>
              {isLoading ? (
                <div className={styles.progressWrapper}>
                <progress className={styles.progress} value={progress} max="100" />
                <div className={styles.progressText}>{progress}%</div>
              </div>
              ) : (
                'Face Swap'
              )}
            </button>
          </div>
        </div>
      </div>
      <Footer color="black" />
      {showModal && <Modal onSubscribe={closeModal} />}
      {isConfirmEmail && <ConfirmEmail isOpen={closeModal} onClose={closeEmailConfirm}/>}
      {showPayAsYouGo && <PayAsYouGo onClose={closePayAsYouGo}/>}
    </div>
  );
};

export default ImageUpload;
