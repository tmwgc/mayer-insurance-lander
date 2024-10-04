import styles from '../../styles/PrivatePolicy.module.css' // Assuming you're using CSS Modules

const PrivacyPolicy = () => {
	return (
		<div className={styles.frame1612}>
			<div className={styles.informationSection}>
				<div className={styles.privacyPolicy}>PRIVACY POLICY</div>

				{/* New Additional Section */}

				<div
					className={
						styles.privacyPolicyForWilliamsonInsuranceAgencyTextMessaging
					}>
					Privacy Policy for Mayer Insurance Agency - Text Messaging
				</div>
				<div className={styles.atWilliamsonInsuranceAgency}>
					At Mayer Insurance Agency, we are committed to protecting the privacy
					and security of your personal information when you engage with us
					through text messaging. This Privacy Policy outlines how we collect,
					use, disclose, and safeguard your information in the context of text
					messaging communications.
				</div>
				<div className={styles.lastUpdated}>
					Last updated: September 13, 2024
				</div>
			</div>
			<div className={styles.informationSection}>
				<div className={styles.sectionTitle}>Information We Collect</div>
				<div className={styles.sectionContent}>
					<div className={styles.sectionSubtitle}>Personal Information</div>
					<div className={styles.sectionDescription}>
						When you engage with us through text messaging, we may collect
						personal information such as your name, phone number, policy
						details, and other relevant information necessary to provide you
						with insurance services.
					</div>
				</div>
			</div>

			<div className={styles.howWeUseYourInformationSection}>
				<div className={styles.sectionTitle}>How We Use Your Information</div>
				<div className={styles.sectionContent}>
					<div className={styles.sectionSubtitle}>Internal Use Only</div>
					<div className={styles.sectionDescription}>
						We use the information collected through text messaging solely for
						internal purposes, including providing insurance services,
						responding to inquiries, and managing your insurance policies.
					</div>
				</div>
				<div className={styles.sectionContent}>
					<div className={styles.sectionSubtitle}>Communication</div>
					<div className={styles.sectionDescription}>
						We may use text messaging to communicate with you about your
						insurance policies, updates, reminders, and other relevant
						information related to our services.
					</div>
				</div>
			</div>

			<div className={styles.informationSharingAndDisclosureSection}>
				<div className={styles.sectionTitle}>
					Information Sharing and Disclosure
				</div>
				<div className={styles.sectionContent}>
					<div className={styles.sectionSubtitle}>
						No Disclosure to Third Parties
					</div>
					<div className={styles.sectionDescription}>
						We do not disclose any information collected through text messaging
						to third-party companies or external entities for marketing or other
						purposes.
					</div>
				</div>
			</div>

			<div className={styles.dataSecuritySection}>
				<div className={styles.sectionTitle}>Data Security</div>
				<div className={styles.sectionDescription}>
					We implement appropriate technical and organizational measures to
					protect the security and confidentiality of your information collected
					through text messaging. However, no method of transmission over the
					internet or electronic storage is completely secure, and we cannot
					guarantee absolute security.
				</div>
			</div>

			<div className={styles.dataRetentionSection}>
				<div className={styles.sectionTitle}>Data Retention</div>
				<div className={styles.sectionDescription}>
					We retain the information collected through text messaging only for as
					long as necessary to fulfill the purposes outlined in this Privacy
					Policy and as required by applicable laws and regulations.
				</div>
			</div>

			<div className={styles.yourRightsSection}>
				<div className={styles.sectionTitle}>Your Rights</div>
				<div className={styles.sectionContent}>
					<div className={styles.sectionSubtitle}>Access and Correction</div>
					<div className={styles.sectionDescription}>
						You have the right to access and correct your personal information
						collected through text messaging.
					</div>
				</div>
				<div className={styles.sectionContent}>
					<div className={styles.sectionSubtitle}>Opt-Out</div>
					<div className={styles.sectionDescription}>
						You may choose to opt-out of receiving text messages from us at any
						time by following the opt-out instructions provided in the text
						messages or by contacting us directly.
					</div>
				</div>
				<div className={styles.sectionContent}>
					<div className={styles.sectionSubtitle}>Data Deletion</div>
					<div className={styles.sectionDescription}>
						You may request the deletion of your personal information collected
						through text messaging, subject to legal and contractual
						obligations.
					</div>
				</div>
			</div>

			<div className={styles.childrenPrivacySection}>
				<div className={styles.sectionTitle}>Children s Privacy</div>
				<div className={styles.sectionDescription}>
					Our text messaging services are not directed to individuals under the
					age of 18, and we do not knowingly collect personal information from
					children.
				</div>
			</div>

			<div className={styles.updatesToPrivacyPolicySection}>
				<div className={styles.sectionTitle}>Updates to Privacy Policy</div>
				<div className={styles.sectionDescription}>
					We may update this Privacy Policy for text messaging from time to
					time. We will notify you of any material changes by posting the
					updated Privacy Policy on our website or by sending you a notification
					through text messaging.
				</div>
			</div>

			<div className={styles.contactUsSection}>
				<div className={styles.sectionTitle}>Contact Us</div>
				<div className={styles.sectionDescription}>
					If you have any questions, concerns, or requests regarding this
					Privacy Policy for text messaging or our data practices, please
					contact us at{' '}
					<a href='mailto:hrvalley@acg.aaa.com' className={styles.email}>
						hrvalley@acg.aaa.com
					</a>
					.
				</div>
			</div>
			<div className={styles.sectionDescription}>
				By engaging with us through text messaging, you consent to the
				collection, use, and disclosure of your information as described in this
				Privacy Policy.
			</div>
		</div>
	)
}

export default PrivacyPolicy
