import React from 'react'

// Import Components
import CandyMachine from '../CandyMachine/CandyMachine'

// Import Styles
import styles from './RaceCard.module.scss'

const RaceCard = ({ myWallet, race }) => {
	return (
		<div className={styles['race-card-container']}>
			<div className={styles['upper-container']}>
				<h2 className={styles['race-name']}>{race.name}</h2>

				<div className={styles['race-image-container']}>
					<img src={race.image} alt='' />
				</div>
			</div>
			<div className={styles['lower-container']}>
				<div className={styles['race-info']}>
					<div className={styles['description-block']}>
						<img
							src='./img/icons/medal.svg'
							alt='calendar icon'
							className={styles.icon}
						/>
						<p>{race.year}</p>
					</div>
					<div className={styles['description-block']}>
						<img
							src='./img/icons/file.svg'
							alt='file icon'
							className={styles.icon}
						/>
						<p>Smart contract - {race.contract}</p>
					</div>
					<div className={styles['description-block']}>
						<img
							src='./img/icons/tag.svg'
							alt='price tag icon'
							className={styles.icon}
						/>
						<p>Price - {race.mintPrice} SOL</p>
					</div>
				</div>
				<CandyMachine walletAddress={window.solana} myWallet={myWallet} />
			</div>
		</div>
	)
}

export default RaceCard
