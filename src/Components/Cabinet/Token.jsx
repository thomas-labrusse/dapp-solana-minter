import React from 'react'

import { toIpfsLink } from '../../utils'

import styles from './Token.module.scss'

const Token = (params) => {
	return (
		<div className={styles['token-container']}>
			<div className={styles.token}>
				<img
					className={styles['token-image']}
					src={toIpfsLink(params.token.image)}
					alt=''
				/>
				<div className={styles['token-info-container']}>
					<div>
						<span className={styles['token-info-name']}>
							{
								params.token.attributes.filter(
									(element) => element.trait_type === 'Race name'
								)[0].value
							}
						</span>
					</div>
					<div>
						<span>🏅</span>{' '}
						<span>
							{
								params.token.attributes.filter(
									(element) => element.trait_type === 'Race Year'
								)[0].value
							}
						</span>{' '}
						<span>🏅</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Token
