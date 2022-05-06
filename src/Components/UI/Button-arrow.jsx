import React from 'react'

import styles from './Button-arrow.module.scss'

const ButtonArrow = (props) => {
	return (
		<button className={styles.container} onClick={props.onClick}>
			<img src={props.link} alt='' />
		</button>
	)
}

export default ButtonArrow
