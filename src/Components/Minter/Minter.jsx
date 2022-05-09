import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Minter.module.scss'

import RaceCard from './RaceCard'
import CandyMachine from '../CandyMachine/CandyMachine'
import Spinner from '../UI/Spinner'

// const contractAddress = '0x4E0375dE5a5313bfA54Da1e6986EeD824961E8A7' // Rinkeby

const races = [
	{
		name: 'London Marathon',
		id: '1',
		year: '2022',
		mintPrice: '0.001',
		contract: '0xBF3...9265a',
		image: './img/races/london-marathon.jpeg',
	},
	{
		name: 'Paris Marathon',
		id: '2',
		year: '2022',
		mintPrice: '0.001',
		contract: '0xD5...E5b7',
		image: './img/races/paris-marathon.png',
	},
	{
		name: 'Ironman 70.3 Vichy',
		id: '3',
		year: '2022',
		mintPrice: '0.001',
		contract: '0x8E...D9a5',
		image: './img/races/IM-Vichy-logo.png',
	},
]

const Minter = React.forwardRef((props, ref) => {
	const [spinner, setSpinner] = useState(false)

	return (
		<div className={styles['minter-container']} id='mint' ref={ref}>
			<div className={styles.minter}>
				<h2 className={styles['minter-header']}>
					Get your <span>medal</span> now
				</h2>
				<div className={styles['races-container']}>
					{races.map((race) => {
						return (
							<RaceCard
								race={race}
								myWallet={props.walletAddress}
								id={race.id}
							/>
						)
					})}
				</div>
				<p
					className={`${styles['minter-link-paragraph']} ${styles['how-to-link']}`}
				>
					Never minted an NFT before ? or simply not quite sure how to do it ?{' '}
					<a href='#how-it-works' className={styles.link}>
						Learn how it works
					</a>
				</p>
			</div>
		</div>
	)
})

export default Minter

// OLD CODE

// const [mintStatus, setMintStatus] = useState({
// 	display: false,
// 	status: false,
// })

/* <div className={styles['selection-container']}>
					<div>
						{selectedRace && (
							<>
								<p>
									<img
										src='./img/medal.svg'
										alt='medal icon'
										className={styles.icon}
									/>
									{selectedRace.name}
								</p>
								<p>
									<img
										src='./img/file.svg'
										alt='file icon'
										className={styles.icon}
									/>
									Smart contract -{' '}
									<a
										href={`https://rinkeby.etherscan.io/address/${selectedRace.contract}`}
										target='_blank'
										rel='noreferrer'
										className={styles.link}
									>
										{selectedRace.contract}
									</a>
								</p>
								<p>
									<img
										src='./img/tag.svg'
										alt='tag icon'
										className={styles.icon}
									/>
									Price - {selectedRace.mintPrice} ETH
								</p>
							</>
						)}
					</div>
				</div>
				{spinner && (
					<div className={styles['spinner-container']}>
						<Spinner />
					</div>
				)}
				{transactionHash && (
					<p className={styles['minter-link-paragraph']}>
						See your mint transaction{' '}
						<a
							href={`https://rinkeby.etherscan.io/tx/${transactionHash}`}
							target='_blank'
							rel='noreferrer'
							className={styles.link}
						>
							here
						</a>
					</p>
				)} */
