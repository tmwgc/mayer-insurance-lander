'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/map.module.css';

const MapComponent = () => {
  const [location, setLocation] = useState('636+5th+Ave%2C+New+York');
  const [dateTime, setDateTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDateTime(
        now.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }),
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const mapSrc = `https://maps.google.com/maps?q=${location}&t=&z=13&ie=UTF8&iwloc=&output=embed&controls=0`;

  return (
    <div className={styles.container}>
      <div className={styles.mapouter}>
        <iframe className={styles.gmap_canvas} src={mapSrc} title="Google Map"></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
