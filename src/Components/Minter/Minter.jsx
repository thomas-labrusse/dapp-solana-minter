import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ethers } from 'ethers'
import contractABI from '../../contract-abi.json'

import styles from './Minter.module.scss'

import CandyMachine from '../CandyMachine/CandyMachine'
import Selector from './Selector'
import Button from '../UI/Button'
import Spinner from '../UI/Spinner'

// const contractAddress = '0x4E0375dE5a5313bfA54Da1e6986EeD824961E8A7' // Rinkeby

const Minter = React.forwardRef((props, ref) => {
	const [transactionHash, setTransactionHash] = useState('')
	const [selectedRace, setSelectedRace] = useState('')
	const [mintStatus, setMintStatus] = useState({
		display: false,
		status: false,
	})
	const [spinner, setSpinner] = useState(false)

	const mintingHandler = async () => {
		try {
			//Starting spinner
			setSpinner(true)

			console.log('minting...')
			// MetaMask as provider
			const provider = new ethers.providers.Web3Provider(window.ethereum)
			// creating a new contract instance, connected to a signer (the connected wallet)
			const signer = provider.getSigner()
			console.log('signer:', signer)
			const address = await signer.getAddress()
			console.log('address:', address)
			const contract = new ethers.Contract(
				selectedRace.contract,
				contractABI,
				signer
			)
			console.log('contract:', contract)
			const contractOwner = await contract.owner()
			let TransactionResponse

			if (contractOwner.length > 0) {
				// Owner mint
				TransactionResponse = await contract.ownerMint(address, 1)
				console.log('Transaction response:', TransactionResponse)
				setTransactionHash(TransactionResponse.hash)
			} else {
				// Public mint
				TransactionResponse = await contract.publicMint(1, {
					value: ethers.utils.parseEther(selectedRace.mintPrice),
				})
				console.log('Transaction response:', TransactionResponse)
				setTransactionHash(TransactionResponse.hash)
			}
			const receipt = await TransactionResponse.wait()
			console.log('Receipt:', receipt)
			if (receipt.status === 1) {
				setMintStatus({
					display: true,
					status: true,
				})
			} else {
				setMintStatus({
					display: true,
					status: false,
				})
			}
			setSpinner(false)
		} catch (err) {
			console.error(err)
			setSpinner(false)
		}
	}

	return (
		<div className={styles['minter-container']} id='mint' ref={ref}>
			<div className={styles.minter}>
				<CandyMachine />
				<h2>
					Get your <span>medal</span> now
				</h2>
				<h3>Proudly crossed that finish line</h3>
				<div className={styles['selection-container']}>
					<Selector
						selectedRace={selectedRace}
						onSelect={setSelectedRace}
					></Selector>
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
				{!mintStatus.display && !spinner && (
					<div className={styles['minter-mint-button-container']}>
						<Button styles='primary' onClick={mintingHandler}>
							Mint my medal
						</Button>
					</div>
				)}
				{mintStatus.display && (
					<div className={styles['mint-status']}>
						{mintStatus.status ? (
							<>
								<span>
									Mint successful ! head to your{' '}
									<Link to='cabinet'>medals cabinet</Link> to see your new medal
									!
								</span>
							</>
						) : (
							<span>
								Mint didn't go through, check your transaction with the link
								below, or contact support.
							</span>
						)}
					</div>
				)}
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
				)}
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
