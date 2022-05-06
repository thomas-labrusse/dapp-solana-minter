import React from 'react'

import styles from './CabinetHeader.module.scss'

const CabinetHeader = () => {
	return (
		<div className={styles['cabinet-header-container']}>
			<div className={styles['cabinet-header']}>
				<h2>Medals cabinet</h2>
			</div>
		</div>
	)
}

export default CabinetHeader
