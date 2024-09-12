'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/insuranceList.module.css'
import Settings from '../../public/stores/settings.json'
import Broucher from '../../public/icons/access/Brochure.svg'

interface LicenseInformation {
	label: string
	license: {
		label: string
		number: string
	}[]
}

interface Certification {
	label: string
	icon: string
	split: string
	link: string
}
interface NavigationLink {
	label: string
	link: string
}

interface NavigationSections {
	service: NavigationLink[]
	Resources: NavigationLink[]
	Legal: NavigationLink[]
}

interface Props {
	brandLogo: string
	copyright_max: string
	copyright_min: string
	navigation: NavigationSections
	address: string
	pincode: string
	InstituteName: string
	InstituteDiscription: string
	InstituteDetails: string
	license_informations: LicenseInformation
	certification: Certification[]
}

const InsuranceList: React.FC<Props> = (props) => {
	const {
		brandLogo,
		copyright_max,
		copyright_min,
		navigation,
		license_informations,
		address,
		pincode,
	} = props
	const { socialMediaIcons, contactIcons, footer } = Settings

	return (
		<div className={styles.footer}>
			<div className={styles.footerContent}>
				<div className={styles.left}>
					<div className={styles.logo}>
						<div className={styles.brandLogo}>
							<Image
								className={styles.broucher}
								style={{ cursor: 'pointer' }}
								src={Broucher}
								alt='alt'
								width={200}
								height={70}
							/>
						</div>
					</div>
					<div className={styles.leftContent}>
						<h2 className={styles.brandName}>
							Professional Insurance Consulting for all needs.
						</h2>
						<p className={styles.details}>
							We offer exclusive consultations and services that protect you,
							your beloved and your belongings at all costs, hassle freely.
						</p>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.leftRight}>
						<div className={styles.rightContent}>
							<div className={styles.contentDiv}>
								<h2 className={styles.instituteDis}>Services</h2>
								{navigation.service.map((item, index) => (
									<div className={styles.numbereflexbox} key={index}>
										<div>
											<Link href={item.link} className={styles.licenseName}>
												{item.label}
											</Link>
										</div>
									</div>
								))}
							</div>
							<div className={styles.contentDiv}>
								<h2 className={styles.instituteDis}>Resources</h2>
								{navigation.Resources.map((item, index) => (
									<div className={styles.numbereflexbox} key={index}>
										<div>
											<Link href={item.link} className={styles.licenseName}>
												{item.label}
											</Link>
										</div>
									</div>
								))}
							</div>
							<div className={styles.contentDiv}>
								<h2 className={styles.instituteDis}>Legal</h2>
								{navigation.Legal.map((item, index) => (
									<div className={styles.numbereflexbox} key={index}>
										<div>
											<Link href={item.link} className={styles.licenseName}>
												{item.label}
											</Link>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InsuranceList
