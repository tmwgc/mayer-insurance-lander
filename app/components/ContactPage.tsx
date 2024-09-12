// pages/Contact.tsx
import React from 'react';
import styles from '../styles/ContactPage.module.css';
import Image from 'next/image'; // Make sure to create this CSS module
import phone from '../../public/icons/access/phone_new.svg';
import user from '../../public/icons/access/user_new.svg';
import mail from '../../public/icons/access/mail.svg';
import arrow from '../../public/icons/access/right_arrow.svg';

import MapComponent from './Map';

const ContactPage: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>CONTACT US</h2>
            <h1 className={styles.subtitle}>We’re here to serve</h1>
          </div>
          <p className={styles.description}>
            here to answer your questions, address your concerns, and help you find the perfect
            insurance solutions for your needs.
          </p>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.form}>
            <div className={styles.inputGroup}>
              <div className={styles.input}>
                <Image src={user} alt="" width={20} height={20} className={styles.buttonIcon} />
                <input type="text" placeholder="Name" className={styles.inputBox} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.input}>
                <Image src={mail} alt="" width={20} height={20} className={styles.buttonIcon} />
                <input type="text" placeholder="E-mail" className={styles.inputBox} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.input}>
                <Image src={phone} alt="" width={20} height={20} className={styles.buttonIcon} />
                <input type="text" placeholder="Phone" className={styles.inputBox} />
              </div>
            </div>
            <div className={styles.inputGroup}>
              <textarea
                id="message"
                className={`${styles.textarea} ${styles.inputBox}`}
                placeholder="Your Message"></textarea>
            </div>
            <div className={styles.button}>
              <div className={styles.buttonText}>Get in touch</div>
              <Image
                src={arrow}
                alt=""
                width={100}
                height={100}
                className={styles.arrowButtonIcon}
              />
            </div>
          </div>
        </div>
      </div>
      <MapComponent />
    </div>
  );
};

export default ContactPage;
