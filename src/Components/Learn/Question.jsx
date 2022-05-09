import React, { useRef } from 'react'

import styles from './Question.module.scss'

const Question = (props) => {
	const contentEl = useRef()

	return (
		<div className={styles.container}>
			<button
				onClick={() => props.onSelectQuestion(props.index)}
				className={styles.question}
			>
				{/* <button onClick={toggleActive} className={styles.question}> */}
				<p>{props.question}</p>
				<div>
					{props.isActive ? (
						<img
							src='./img/icons/arrow-up.svg'
							alt='expand more'
							className={styles.icon}
						/>
					) : (
						<img
							src='./img/icons/arrow-down.svg'
							alt='expand less'
							className={styles.icon}
						/>
					)}
				</div>
			</button>
			<div
				ref={contentEl}
				style={
					props.isActive
						? { height: contentEl.current.scrollHeight }
						: { height: '0px' }
				}
				className={` ${styles.answer} ${props.isActive ? styles.active : ''}`}
			>
				{props.answer}
			</div>
		</div>
	)
}

export default Question
