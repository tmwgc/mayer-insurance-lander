'use client';

import styles from '../styles/ContactUs.module.css';
import Image from 'next/image';
import calendar from '../../public/icons/access/calendar.svg';
import mail from '../../public/icons/socialIcons/mail (2).svg';
import location from '../../public/icons/socialIcons/location.svg';
import phone from '../../public/icons/socialIcons/call.svg';
import MapComponent from './Map';

const ContactPage = () => (
  <div className={styles.container}>
    <div className={styles.frame1221}>
      <div className={styles.contactTitle}>CONTACT US</div>
      <div className={styles.quoteTitle}>Get a free quote!</div>
      <div className={styles.description}>
        Protect Your Home, Business, and Valuables with a Trusted Insurance Agency Providing
        Comprehensive Solutions in Highland Michigan | Request a Customized Quote Today through Our
        Contact Us Form
      </div>
      <div className={styles.button}>
        <Image src={calendar} alt="" width={20} height={20} className={styles.arrowButtonIcon} />

        <div className={styles.buttonText}>Get a free consultation now</div>
      </div>
      {/* <div className={styles.button}>
        <div className={styles.calendarIcon}>
          <div
            className={styles.icon}
            style={{ width: '12px', height: '12px', left: '2px', top: '2.67px' }}></div>
          <div
            className={styles.icon}
            style={{ width: '0', height: '2.67px', left: '10.67px', top: '1.33px' }}></div>
          <div
            className={styles.icon}
            style={{ width: '0', height: '2.67px', left: '5.33px', top: '1.33px' }}></div>
          <div
            className={styles.icon}
            style={{ width: '12px', height: '0', left: '2px', top: '6.67px' }}></div>
        </div>
        <div className={styles.scheduleText}>Schedule an appointment</div>
      </div> */}
    </div>
    <div className={styles.contactInfoWrapper}>
      <div className={styles.infoCard}>
        <div className={styles.infoTitle}>Mayer Insurance Agency</div>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <Image src={mail} alt="" width={20} height={20} className={styles.arrowButtonIcon} />
          </div>
          <div>Info@williamsonia.com</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <Image src={phone} alt="" width={20} height={20} className={styles.arrowButtonIcon} />
          </div>
          <div>(810)772-0211</div>
        </div>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <Image
              src={location}
              alt=""
              width={20}
              height={20}
              className={styles.arrowButtonIcon}
            />
          </div>
          <div>1050 South Milford Road, Suite 201, Highland, Michigan 48357, United States</div>
        </div>
      </div>
      <div className={styles.openHoursCard}>
        <div className={styles.openHoursTitle}>Open Hours</div>
        <div className={styles.hoursItem}>
          <div className={styles.hoursLabel}>Open Today</div>
          <div className={styles.hoursValueColor}>09:00 am – 06:00 pm</div>
        </div>
        <div className={styles.hoursItem}>
          <div className={styles.hoursLabel}>Mon - Fri</div>
          <div className={styles.hoursValue}>09:00 am – 06:00 pm</div>
        </div>
        <div className={styles.hoursItem}>
          <div className={styles.hoursLabel}>Sat</div>
          <div className={styles.hoursValue}>09:00 am – 06:00 pm</div>
        </div>
        <div className={styles.hoursItem}>
          <div className={styles.hoursLabel}>Sun</div>
          <div className={styles.hoursValue}>Closed</div>
        </div>
      </div>
    </div>
    <MapComponent />
  </div>
);

export default ContactPage;
