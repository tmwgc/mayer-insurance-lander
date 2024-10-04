'use client'

import styles from '../../styles/ContactUs.module.css'
import Image from 'next/image'
import calendar from '../../../public/icons/access/calendar.svg'
import mail from '../../../public/icons/socialIcons/mail (2).svg'
import location from '../../../public/icons/socialIcons/location.svg'
import MapComponent from '../../components/Map'

import style from '../../styles/login.module.css'
import tick_mark from '../../../public/icons/access/tick_mark.svg'
import phone from '../../../public/icons/access/phone_new.svg'
import user from '../../../public/icons/access/user_new.svg'
import arrow from '../../../public/icons/access/right_arrow.svg'

const Login = (
	<div className={style.container}>
		<div className={style.header}>
			Raise a support ticket
			<br /> and we are here to help.
		</div>
		<div className={style.inputGroup}>
			<div className={style.inputWrapper}>
				<div className={style.input}>
					<input
						style={{ width: 350 }}
						type='text'
						placeholder='First'
						className={style.inputBoxFlex}
					/>
					<Image src={tick_mark} alt='' width={20} height={20} />
				</div>
				<div className={style.lastNameInput}>
					<input
						style={{ width: 350 }}
						type='text'
						placeholder='Last'
						className={style.inputBoxFlex}
					/>
				</div>
			</div>
			<div className={style.emailInput}>
				<Image
					src={user}
					alt=''
					width={20}
					height={20}
					className={style.buttonIcon}
				/>
				<input
					type='text'
					placeholder='Email Address'
					className={style.inputBox}
				/>
			</div>
			<div className={style.phoneInput}>
				<Image
					src={phone}
					alt=''
					width={20}
					height={20}
					className={styles.buttonIcon}
				/>
				<input
					type='text'
					placeholder='Phone Number'
					className={style.inputBox}
				/>
			</div>
			<div className={style.phoneInput}>
				<input type='checkbox' className={styles.inputBox} />
				<p style={{ fontSize: 12, textAlign: 'left' }}>
					By checking this box, you are agreeing to receive our marketing,
					promotional and exclusive service related SMS. For more information
					visit our privacy policy page.
				</p>
			</div>
		</div>
		<div className={style.button}>
			<div className={style.buttonText}>Connect with us now</div>
			<Image
				src={arrow}
				alt=''
				width={100}
				height={100}
				className={style.arrowButtonIcon}
			/>
		</div>
	</div>
)

const ContactUs = () => (
	<div className={styles.container}>
		<div style={{ alignSelf: 'center' }} className={styles.frame1221}>
			<div className={styles.contactTitle}>CONTACT US</div>
			<div className={styles.quoteTitle}>
				We are here to serve you with utmost professionalism
			</div>
			<div className={styles.description}>
				Protect Your Home, Auto and Life with a Trusted Insurance Agency
				Providing Comprehensive Solutions in Highland Michigan | Request an
				appointment with our team
			</div>
			{/* <div className={styles.button}>
        <Image src={calendar} alt="" width={20} height={20} className={styles.arrowButtonIcon} />

        <div className={styles.buttonText}>Schedule an appointment now</div>
      </div> */}
		</div>
		{Login}
		<div className={styles.contactInfoWrapper}>
			<div className={styles.infoCard}>
				<div className={styles.infoTitle}>Mayer Insurance Agency</div>
				<div className={styles.contactItem}>
					<div className={styles.contactIcon}>
						<Image
							src={mail}
							alt=''
							width={20}
							height={20}
							className={styles.arrowButtonIcon}
						/>
					</div>
					<div>hrvalley@acg.aaa.com</div>
				</div>
				<div className={styles.contactItem}>
					<div className={styles.contactIcon}>
						<Image
							src={phone}
							alt=''
							width={20}
							height={20}
							className={styles.arrowButtonIcon}
						/>
					</div>
					<div>248-413-5377</div>
				</div>
				<div className={styles.contactItem}>
					<div className={styles.contactIcon}>
						<Image
							src={location}
							alt=''
							width={20}
							height={20}
							className={styles.arrowButtonIcon}
						/>
					</div>
					<div>
						455 S Livernois Rd Suite, B23 Rochester Hills, MI 48357, United
						States
					</div>
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
)

export default ContactUs
