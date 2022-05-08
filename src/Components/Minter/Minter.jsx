import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Minter.module.scss'

import RaceCard from './RaceCard'
import CandyMachine from '../CandyMachine/CandyMachine'
import Spinner from '../UI/Spinner'

// const contractAddress = '0x4E0375dE5a5313bfA54Da1e6986EeD824961E8A7' // Rinkeby

const races = [
	{
		name: 'London Marathon 2022',
		id: '1',
		mintPrice: '0.001',
		contract: '0xBF33f47965379fB4187Db07E7398c8a3eFa9265a',
	},
	{
		name: 'Paris Marathon 2022',
		id: '2',
		mintPrice: '0.001',
		contract: '0xD560B317416E1FE2781C8a0b88A1DC04F611E5b7',
	},
	{
		name: 'Ironman 70.3 Vichy 2022',
		id: '3',
		mintPrice: '0.001',
		contract: '0x8EC38C64Dd165B0B1b756104ACd4377840fCD9a5',
	},
]

const Minter = React.forwardRef((props, ref) => {
	const [spinner, setSpinner] = useState(false)

	return (
		<div className={styles['minter-container']} id='mint' ref={ref}>
			<div className={styles.minter}>
				<h2>
					Get your <span>medal</span> now
				</h2>
				<div className={styles['races-container']}>
					{races.map((race) => {
						return <RaceCard walletAddress={window.solana} />
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
