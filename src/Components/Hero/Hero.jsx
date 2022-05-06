import React from 'react'

import styles from './Hero.module.scss'

import Button from '../UI/Button'

const Hero = (props) => {
	const scrollTo = (ref) => {
		console.log('scroll To triggered')
		console.log('ref passed to scroll to function:', ref)
		ref.current.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className={styles['hero-container']}>
			<div className={styles.hero}>
				<h1>
					<div>Train. Run. Celebrate.</div>
					<div className={styles.animated}></div>
				</h1>
				<h3>
					<span className={styles.highlight}>Finish Lines NFT medals</span> are
					unique tokens, permanently stored on the ethereum blockchain.{' '}
					<span className={styles.highlight}>
						Race finishers only can redeem
					</span>{' '}
					their medals.
				</h3>
				<div className={styles.cta}>
					<Button styles='primary' onClick={() => scrollTo(props.mintRef)}>
						Claim your medal
					</Button>
				</div>
				<div className={styles.learn}>
					<Button styles='secondary' onClick={() => scrollTo(props.learnRef)}>
						Learn more
					</Button>
				</div>
				<img
					src='./img/man-finisher.png'
					alt='man finishing race'
					className={styles['image-man']}
				/>
				<img
					src='./img/woman-finisher.png'
					alt='woman finishing race'
					className={styles['image-woman']}
				/>
			</div>
		</div>
	)
}

export default Hero
