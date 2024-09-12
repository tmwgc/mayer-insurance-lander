'use client'

import Image from 'next/image'
import { URL } from 'url'
import styles from '../styles/head.module.css'
import { useRouter } from 'next/navigation'
import { Float } from '../components'
import Settings from '../../public/stores/settings.json'

interface HeadProps {
	logoPath: URL['href']
	links?: []
	menuHandler?: any
	homeLogo: string
	quotes: string
	breakAfter: string
}

const Head: React.FC<HeadProps> = (props) => {
	const { logoPath, menuHandler } = props
	const { links } = Settings

	const router = useRouter()

	const callHandler = () => {
		window.location.href = 'tel:+91 8122801215'
	}

	const logoHandler = () => {
		router.replace('/')
	}

	return (
		<div className={styles.head}>
			<div className={styles.left}>
				<Image
					style={{ cursor: 'pointer' }}
					onClick={menuHandler}
					src={'/icons/hamburger/color.svg'}
					className={styles.hamburgerIcon}
					alt='alt'
					width={20}
					height={20}
				/>
				<Image
					onClick={logoHandler}
					style={{ cursor: 'pointer' }}
					className={styles.mainLogo}
					src={logoPath}
					alt='alt'
					width={142}
					height={46}
				/>
			</div>
			<div className={styles.list}>
				<div className={styles.float}>
					<Float link={links.NavigationLinks} />
				</div>
			</div>
			<div className={styles.contactDiv}>
				<div className={styles.contact}>
					<Image
						style={{ cursor: 'pointer' }}
						src={'/icons/access/phone.svg'}
						alt='alt'
						className={styles.contactIcons}
						width={40}
						height={40}
					/>
					<div>
						<p className={styles.contactText}>Avail Consultation</p>
						<p className={styles.contactText}>586-907-8700</p>
					</div>
				</div>
			</div>
			<div className={styles.right}>
				<div className={styles.rightBtn}>
					<button className={styles.btn}>Log in</button>
				</div>
			</div>
		</div>
	)
}

export default Head
