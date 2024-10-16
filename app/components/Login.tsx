'use client'

import React, { useRef, useState } from 'react'

import Image from 'next/image'
import styles from '../styles/login.module.css'
import tick_mark from '../../public/icons/access/tick_mark.svg'
import phone from '../../public/icons/access/phone_new.svg'
import user from '../../public/icons/access/user_new.svg'
import arrow from '../../public/icons/access/right_arrow.svg'

import emailjs from '@emailjs/browser'

const Login = () => {
	const form = useRef<HTMLFormElement>(null)
	const [isFormSubmitted, submitForm] = useState<boolean>(false)

	const renderForm = (
		<form id='form' ref={form}>
			<div className={styles.inputGroup}>
				<div className={styles.inputWrapper}>
					<div className={styles.input}>
						<input
							name='fname'
							type='text'
							placeholder='First'
							className={styles.inputBoxFlex}
						/>
						<Image src={tick_mark} alt='' width={20} height={20} />
					</div>
					<div className={styles.lastNameInput}>
						<input
							name='lname'
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
						name='email'
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
						name='mobile'
						type='text'
						placeholder='Phone Number'
						className={styles.inputBox}
					/>
				</div>
				<div className={styles.phoneInput}>
					<input type='checkbox' className={styles.inputBox} />
					<p style={{ fontSize: 12, textAlign: 'left' }}>
						By checking this box, you are agreeing to receive our SMS. For more
						information visit our privacy policy page.
					</p>
				</div>
			</div>
			<div
				onClick={() => {
					emailjs
						.sendForm('service_x6xkzrc', 'template_iyd4dof', '#form', {
							publicKey: 'Y1R0pcq4h_u7gbjto',
						})
						.then(
							() => {
								submitForm(true)
								console.log('SUCCESS!')
							},
							(error) => {
								console.log('FAILED...', error)
							}
						)
				}}
				className={styles.button}>
				<div className={styles.buttonText}>Get a free consultation now</div>
				<Image
					src={arrow}
					alt=''
					width={100}
					height={100}
					className={styles.arrowButtonIcon}
				/>
			</div>
		</form>
	)

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				Get a free consultation <br /> from experts now.
			</div>

			{isFormSubmitted ? (
				<h2>
					Your Enquiry Has Been Submitted. Kindly keep Patience. Our Team will
					reach you in 24 Hours
				</h2>
			) : (
				renderForm
			)}
			<div className={styles.footerText}>
				Our expert consultants will help you find best policy that
				<br />
				suits your needs | *Terms & Conditions Apply
			</div>
		</div>
	)
}

export default Login
