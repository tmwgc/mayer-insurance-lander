'use client';
import React, { FC } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import arrowBtn from '../public/icons/access/right_arrow.svg';
import Settings from '../public/stores/settings.json';
import { ContactUs, Login, PrivatePolicy } from './components';

// Define the type for the Hero object
interface Hero {
  label: string;
  breakLabel: string;
  number: string;
  subLabel: string;
  breakSubLabel: string;
  content: string;
}

// Hero Component
const Hero: FC<{ label: string; splitAfter: string }> = ({ label, splitAfter }) => {
  const parts = label.split(splitAfter);
  return (
    <div className={styles.heroContent}>
      <h1 className={styles.heroHeading}>
        Protect Your Home, Auto, Life, and Business with Trusted Insurance Carriers.
      </h1>
      <p className={styles.heroText}>
        At Williamson Insurance Agency, we are committed to protecting the privacy and security of
        your personal information when you engage with us through text messaging. This Privacy
        Policy outlines how we collect, use, disclose, and safeguard your information in the context
        of text messaging communications.
      </p>
      <div
        className={styles.heroLink}
        onClick={() => window.open('https://forms.gle/NBuyAfbNV1wCqGiA6', '_blank')}>
        <Image
          className={styles.arrowIcon}
          src={arrowBtn}
          alt="Explore Services"
          width={70}
          height={50}
        />
        <h2 className={styles.heroButtonText}>Explore Services</h2>
      </div>
    </div>
  );
};

// Home Component
const Home: React.FC = () => {
  const { hero }: { hero: Hero } = Settings;

  return (
    <div className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <Hero label={hero.label} splitAfter={hero.breakLabel} />
        <Login />
      </div>
    </div>
  );
};

export default Home;
