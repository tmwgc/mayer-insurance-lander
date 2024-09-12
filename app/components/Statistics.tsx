// pages/statistics.js
import styles from '../styles/statistics.module.css'
import settings from '../../public/stores/settings.json'
import Image from 'next/image'
import home from '../../public/icons/statistics/Ads.svg'

interface Hero {
	id: string | number // Adjusted type to match JSON data
	title: string
	value: string
	description: string
	image: string
	innerCircleColor: string
}
const ImpressionsComponent = () => {
	return (
		<>
			<div className={styles.adsClick}>
				<Image
					src={home}
					alt=''
					width={20}
					height={20}
					className={styles.vector}
				/>
			</div>
			<div className={styles.group876}>
				<div className={styles.impressions}>Impressions</div>
				<div className={styles.impressionsValue}>3.2 M</div>
			</div>
			<div className={styles.impressionText}>
				Impression created through
				<br />
				our strategic campaigns
			</div>
		</>
	)
}

const Statistics = () => {
	// const { hero }: { hero: { certification: Hero[] } } = settings
	// const data = hero.certification

	return (
		<div className={styles.container}>
			{/* {data.map((item) => (
				<div
					key={item.id}
					className={`${styles.card} ${styles[`card${item.id}`]}`}>
					<div
						className={styles.circle}
						style={{ background: item.circleColor }}
					/>
					<div className={styles.details}>
						<div className={styles.title}>{item.title}</div>
						<div className={styles.value}>{item.value}</div>
					</div>
					<div className={styles.description}>{item.description}</div>
					<div className={styles.icon}>
						<div
							className={styles.innerCircle}
							style={{ background: item.innerCircleColor }}
						/>
					</div>
				</div>
			))} */}
			<div>
				<h1>Welcome to our Dashboard</h1>
				<ImpressionsComponent />
			</div>
			{/* <div className={`${styles.border} ${styles.borderHorizontal}`} />
			<div
				className={`${styles.border} ${styles.borderVertical}`}
				style={{ left: '400px', top: '400px' }}
			/>
			<div
				className={`${styles.border} ${styles.borderVertical}`}
				style={{ left: '890px', top: '400px' }}
			/> */}
		</div>
	)
}

export default Statistics
