import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.scss'

import Connect from './Connect'

const Header = (props) => {
	const { page } = props

	return (
		<div className={styles['header-container']}>
			<header className={styles.header}>
				<img src='img/Logo.png' alt='Company logo' />
				<div className={styles['nav-container']}>
					<nav>
						<ul>
							{page === 'Home' ? (
								<>
									<li>
										<a href='#mint'>Redeem medal</a>
									</li>
									<li>
										<a href='#how-it-works'>How it works</a>
									</li>
									<li>
										<a href='#learn'>Learn more</a>
									</li>
									<li>
										<Link to='cabinet'>My cabinet</Link>
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
					</nav>
					<Connect
						walletAddress={props.walletAddress}
						onConnect={props.onConnect}
					></Connect>
				</div>
			</header>
		</div>
	)
}
export default Header
