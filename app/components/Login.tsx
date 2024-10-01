import React from 'react'
import Image from 'next/image'
import styles from '../styles/login.module.css'
import tick_mark from '../../public/icons/access/tick_mark.svg'
import phone from '../../public/icons/access/phone_new.svg'
import user from '../../public/icons/access/user_new.svg'
import arrow from '../../public/icons/access/right_arrow.svg'

const Login = () => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				Get a free consultation <br /> from experts now.
			</div>
			<div className={styles.inputGroup}>
				<div className={styles.inputWrapper}>
					<div className={styles.input}>
						<input
							type='text'
							placeholder='First'
							className={styles.inputBoxFlex}
						/>
						<Image src={tick_mark} alt='' width={20} height={20} />
					</div>
					<div className={styles.lastNameInput}>
						<input
							type='text'
							placeholder='Last'
							className={styles.inputBoxFlex}
						/>
					</div>
				</div>
				<div className={styles.emailInput}>
					<Image
						src={user}
						alt=''
						width={20}
						height={20}
						className={styles.buttonIcon}
					/>
					<input
						type='text'
						placeholder='Email Address'
						className={styles.inputBox}
					/>
				</div>
				<div className={styles.phoneInput}>
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
						className={styles.inputBox}
					/>
				</div>
				<div className={styles.phoneInput}>
					<input type='checkbox' className={styles.inputBox} />
					<p style={{ fontSize: 12, textAlign: 'left' }}>
						By checking this box, you are agreeing to receive our marketing,
						promotional and exclusive service related SMS, Emails and
						informations. For more information visit our privacy policy page.
					</p>
				</div>
			</div>
			<div className={styles.button}>
				<div className={styles.buttonText}>Get a free consultation now</div>
				<Image
					src={arrow}
					alt=''
					width={100}
					height={100}
					className={styles.arrowButtonIcon}
				/>
			</div>
			<div className={styles.footerText}>
				Our expert consultants will help you find best policy that
				<br />
				suits your needs | *Terms & Conditions Apply
			</div>
		</div>
	)
}

export default Login
