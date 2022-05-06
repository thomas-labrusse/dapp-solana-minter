import React from 'react'

import styles from './MedalDescription.module.scss'

function MedalDescription(props) {
	const { description, attributes, id } = props.token

	const date =
		attributes.filter((element) => element.trait_type === 'Race date').length >
		0
			? new Date(
					attributes.filter(
						(element) => element.trait_type === 'Race date'
					)[0].value
			  )
			: undefined

	const name =
		attributes.filter((element) => element.trait_type === 'Race name').length >
		0
			? attributes.filter((element) => element.trait_type === 'Race name')[0]
					.value
			: undefined

	const distance =
		attributes.filter((element) => element.trait_type === 'Race distance')
			.length > 0
			? attributes.filter(
					(element) => element.trait_type === 'Race distance'
			  )[0].value
			: undefined

	return (
		<div className={styles['description-container']}>
			{name && <h3>{name}</h3>}

			{description && (
				<div className={styles['description-block']}>
					<img src='./img/medal.svg' alt='medal icon' className={styles.icon} />
					<p className={styles['description-paragraph']}>{description}</p>
				</div>
			)}

			{date && (
				<div className={styles['description-block']}>
					<img
						src='./img/calendar.svg'
						alt='calendar icon'
						className={styles.icon}
					/>
					<p>{date.toDateString()}</p>
				</div>
			)}

			{distance && (
				<div className={styles['description-block']}>
					<img
						src='./img/tape-measure.svg'
						alt='distance icon'
						className={styles.icon}
					/>
					<p>{distance}</p>
				</div>
			)}
		</div>
	)
}

export default MedalDescription
