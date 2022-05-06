import React from 'react'

import styles from './How.module.scss'

const How = () => {
	return (
		<div className={styles['how-container']} id='how-it-works'>
			<div className={styles.how}>
				<h2>How it works</h2>
				<div className={styles.steps}>
					<div className={styles.step}>
						<h3>
							<span>Cross</span> the finish line
						</h3>
						<span className={`${styles.number} ${styles.one}`}>1</span>
						<p>
							Once you finished your race, you can redeem a digital medal as an
							NFT (if you’re not sure what is an NFT and their use, you can head
							here). Finishers only are eligible, just like a regular medal !
						</p>
					</div>
					<div className={styles.step}>
						<h3>
							<span>Claim</span> your medal
						</h3>
						<span className={styles.number}>2</span>
						<p>
							To redeem your medal, you have to connect your ethereum compatible
							wallet (only Metamask is supported) to buy/mint it. The price
							depends on the partner organization, and are to be paid in ethers
							(ETH). Note that like all NFT on the ethereum blockchain, you will
							have to pay a fee to the network for your mint to proceed.
						</p>
					</div>
					<div className={styles.step}>
						<h3>
							<span>Collect</span> in your trophy cabinet
						</h3>
						<span className={styles.number}>3</span>
						<p>
							Just like a regular medal, your NFT medal is the everlasting proof
							of your performance. Collect and store it in your wallet, display
							it on NFT compatible social media (twitter for instance).
							Connecting your wallet to our platform, you can view all your
							medals in your Trophy Cabinet.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default How
