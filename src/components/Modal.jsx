import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../assets/css/modal.module.css';

const Modal = ({ onSubscribe }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onSubscribe}>
          &#10006;
        </button>
        <br />
        <br />
        <br />
        <h2 className={styles.heading1}>Upgrade To Premium</h2>
        <h2 className={styles.heading2}>Save Your Memories in Style!</h2>
        <p className={styles.para}>
          That should take place right after they finish paying for credits. Like a "Store all your creations in your
          private
          <span className={styles.color}> Creation Locker!</span>
        </p>
        <button className={styles.subscribebtn} onClick={onSubscribe}>
          Subscribe Now
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
