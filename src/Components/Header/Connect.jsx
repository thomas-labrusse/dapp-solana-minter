import React from 'react'

import Button from '../UI/Button'
import styles from './Connect.module.scss'

const Connect = (props) => {
	return (
		<div className={styles['connect-container']}>
			<Button styles='primary' onClick={props.onConnect}>
				{!props.walletAddress
					? 'Connect Wallet'
					: `Connected: ${props.walletAddress.slice(
							0,
							3
					  )}...${props.walletAddress.slice(-3)}`}
			</Button>
		</div>
	)
}
export default Connect
