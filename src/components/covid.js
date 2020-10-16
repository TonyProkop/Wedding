import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./covid.module.scss"

const Covid = () => {
	const [showCovidModal, setShowCovidModal] = useState(false);

	return (
		<div>
			<li onClick={() => setShowCovidModal(!showCovidModal)}>COVID-19</li>
			<div className={showCovidModal ? `${styles.covidModalContainer} ${styles.showCovidModal}` : `${styles.covidModalContainer}`}>
				<div className={styles.modal}>
					<div className={styles.modalGuts}>
						<FontAwesomeIcon
							icon="times"
							className={styles.closeMenu}
							onClick={() => setShowCovidModal(!showCovidModal)}
						/>
						<h1>COVID-19</h1>
						<p>What we're doing to stop the spread:</p>
						<ul className={styles.precautionList}>
							<li>Masks available</li>
							<li>Hand sanitizer provided</li>
							<li>Color coded wrist bands for social distance preference</li>
							<li>Must pass thermometer test to enter reception</li>
							<li>Our venue and caterer are also going above and beyond to protect the health of our guests.</li>
							<li>Feel free to reach out for more details if needed!</li>
						</ul>
					</div>
				</div>
				<div className={styles.modalOverlay} onClick={() => setShowCovidModal(!showCovidModal)}></div>
			</div>
		</div>
	);
}

export default Covid