import React from 'react'

import styles from './Medal.module.scss'
import { toIpfsLink } from '../../utils'

const Medal = ({ token }) => {
	return (
		<div className={styles['medal-container']}>
			<img
				src='./img/cord-blured.png'
				className={styles['cord-image']}
				alt='medal-cord'
			/>
			<div className={styles['medal-holder']}>
				<img
					src={toIpfsLink(token.image)}
					className={styles['medal-image']}
					alt='medal'
				/>
			</div>
		</div>
	)
}

export default Medal
