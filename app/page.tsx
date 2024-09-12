'use client'
import React, { FC } from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import './globals.css'
import Settings from '../public/stores/settings.json'
import arrowBtn from '../public/icons/access/right_arrow.svg'
import {
	ServiceCapabilities,
	AdvertisementBar,
	MainServices,
	Login,
	Statistics,
} from './components'
// Define the type for each certification item
interface CertificationItem {
	label: string
	icon: string
	split: string
}

// Define the type for the Hero object
interface Hero {
	label: string
	breakLabel: string
	number: string
	subLabel: string
	breakSubLabel: string
	content: string
}

// Hero Component
const Hero: FC<{ label: string; splitAfter: string }> = ({
	label,
	splitAfter,
}) => {
	const parts = label.split(splitAfter)
	return (
		<div className={styles.content}>
			{/* <h1 className={styles.heading}>{parts[0] + splitAfter}</h1>
      <h1 className={styles.heading}>{parts[1]}</h1> */}
			<h1 className={styles.h1_tag}>
				Protect Your Home, Auto, Life, and Business with Trusted Insurance
				Carriers.
			</h1>
			<p className={styles.p_tag}>
				At Williamson Insurance Agency, we are committed to protecting the
				privacy and security of your personal information when you engage with
				us through text messaging. This Privacy Policy outlines how we collect,
				use, disclose, and safeguard your information in the context of text
				messaging communications.
			</p>
			<div className={styles.link}>
				<Image
					className={styles.broucher}
					style={{ cursor: 'pointer' }}
					src={arrowBtn}
					alt='alt'
					width={70}
					height={50}
				/>
				<h1 className={styles.h1_tag}>Explore Services</h1>
			</div>
		</div>
	)
}

// Home Component
const Home: React.FC = () => {
	const formUrl = 'https://forms.gle/NBuyAfbNV1wCqGiA6'
	const { hero }: { hero: Hero } = Settings

	const formHandler = () => {
		window.open(formUrl, '_blank')
	}

	const renderContent = (
		<div className={styles.container}>
			<div className={styles.hero}>
				<Hero label={hero.label} splitAfter={hero.breakLabel} />
				<Login />
			</div>
		</div>
	)

	const renderSlick = (
		<div className={styles.contentPage}>
			{/* <main className={styles.contant}>{renderContent}</main> */}
			{/* <Statistics /> */}
		</div>
	)

	return renderSlick
}

export default Home
