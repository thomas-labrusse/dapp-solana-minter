import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Footer.module.scss'

const Footer = (props) => {
	const { page } = props
	return (
		<div className={styles['footer-container']} id='footer'>
			<div className={styles.footer}>
				<ul>
					{page === 'Home' ? (
						<>
							<li>
								<a href='#mint'>Redeem</a>
							</li>
							<li>
								<a href='#how-it-works'>How it works</a>
							</li>
							<li>
								<a href='#learn'>Learn more</a>
							</li>
							<li>
								<Link to='cabinet'>Cabinet</Link>
							</li>
						</>
					) : (
						<></>
					)}
					{page === 'Cabinet' ? (
						<>
							<li>
								<Link to='/'>Home</Link>
							</li>
						</>
					) : (
						<></>
					)}
				</ul>
				<img src='img/Logo-footer.png' alt='Company logo' />
				<p className={styles.copyrights}>© Copyright by Thomas Labrusse</p>
			</div>
		</div>
	)
}

export default Footer
