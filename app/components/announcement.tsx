import styles from '../styles/announcement.module.css'
import React, { useState, useEffect } from 'react'
import volume from '../../public/icons/volume.svg'
import { BiSolidMegaphone } from 'react-icons/bi'
import Image from 'next/image'
import Settings from '../../public/stores/settings.json'

interface AnnouncementProps {
	title: string
	content: string
	icons: {
		download: {
			label: string
			icon: string
		}
		upload: {
			label: string
			icon: string
		}
		close: {
			label: string
			icon: string
		}
	}
}
const Announcement: React.FC<AnnouncementProps> = ({
	title,
	content,
	icons,
}) => {
	const { announcement } = Settings

	const [isClosed, setIsClosed] = useState(false)
	const [announcementUpdatedAt, setAnnouncementUpdatedAt] = useState('')

	useEffect(() => {
		if (localStorage.getItem('announcementLastUpdated') != content) {
			setAnnouncementUpdatedAt(content)
			setIsClosed(true)
			if (content == '') {
				setIsClosed(false)
			}
		}
	}, [content])

	const handleClose = () => {
		localStorage.setItem('announcementLastUpdated', announcementUpdatedAt)
		setIsClosed(false)
	}

	return (
		<div>
			{isClosed ? (
				<div className={styles.main}>
					<div className={styles.announcement}>
						<div className={styles.personDiv}>
							<Image
								className={styles.personImg}
								src={announcement.personImg}
								alt='alt'
								width={200}
								height={200}
							/>
						</div>
						<div className={styles.contentDiv}>
							<div className={styles.announcementIn}>
								<h1 className={styles.heading}>{title}</h1>
							</div>
							<div className={styles.content}>
								<p className={styles.announcementText}>{content}</p>
							</div>
						</div>
						<div className={styles.announcementBtn}>
							<div className={styles.calander}>
								<p className={styles.timeHeading}>OFFER EXPIRES IN</p>
								<div className={styles.timeDiv}>
									<div className={styles.minutesDiv}>
										<h1 className={styles.timeText}>12</h1>
										<p className={styles.minutesText}>Mins</p>
									</div>
									<div className={styles.secDiv}>
										<h1 className={styles.timeText}>11</h1>
										<p className={styles.seText}>Secs</p>
									</div>
								</div>
								<div className={styles.offerBtnDiv}>
									<button className={styles.offerBtn}>Claim Offer</button>
								</div>
							</div>
						</div>
						<div className={styles.cancelIconInside} onClick={handleClose}>
							<Image
								width={18}
								height={18}
								className={styles.cancelBtn}
								src={icons.close.icon}
								alt='alt'
							/>
							<p className={styles.cancelBtnText}>{icons.close.label}</p>
						</div>
					</div>
				</div>
			) : (
				''
			)}
		</div>
	)
}

export default Announcement
