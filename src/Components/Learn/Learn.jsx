import React, { useEffect, useState } from 'react'

import styles from './Learn.module.scss'

import Question from './Question'

const Learn = React.forwardRef((props, ref) => {
	const [activeTopic, setActiveTopic] = useState(0)
	const [activeQuestion, setActiveQuestion] = useState(-1)

	const selectTopic = (index) => {
		if (activeTopic === index) {
			return
		}
		setActiveQuestion(-1)
		setActiveTopic(index)
		return
	}

	const selectQuestion = (index) => {
		console.log('-------- new console log ----------')
		console.log('index :', index)
		console.log('active Question :', activeQuestion)
		if (activeQuestion === index) {
			setActiveQuestion(-1)
			console.log('fold')
			return
		}
		setActiveQuestion(index)
	}

	const QA = [
		{
			title: 'Finish lines NFT',
			questions: [
				{
					question: 'What is a finish lines medal ?',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
				{
					question: 'What is a finish lines medal ?',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
				{
					question: 'What is a finish lines medal ?',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
			],
		},
		{
			title: 'Redeem my medal',
			questions: [
				{
					question: 'Second topic',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
				{
					question: 'Second topic',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
				{
					question: 'Second topic',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
			],
		},
		{
			title: 'Technical information',
			questions: [
				{
					question: 'Third topic',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
				{
					question: 'Third topic',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
				{
					question: 'Third topic',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
			],
		},
		{
			title: 'General',
			questions: [
				{
					question: 'Fourth topic',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
				{
					question: 'Fourth topic',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
				{
					question: 'Fourth topic',
					answer:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, qui illum quidem molestiae voluptate rerum debitis fuga temporibus velit voluptates aliquid ratione! Explicabo, in corrupti.',
				},
			],
		},
	]

	useEffect(() => {
		console.log('rerender')
	})

	return (
		<div className={styles['learn-container']} id='learn' ref={ref}>
			<div className={styles.learn}>
				<h2>Learn more</h2>
				<div className={styles['QA-container']}>
					<div className={styles.topics}>
						{QA.map((topic, index) => {
							return (
								<button
									onClick={() => selectTopic(index)}
									className={
										styles[activeTopic === index ? 'active' : 'inactive']
									}
								>
									{topic.title}
								</button>
							)
						})}
					</div>
					<div className={styles.questions}>
						{QA[activeTopic].questions.map((question, index) => {
							return (
								<Question
									question={question.question}
									answer={question.answer}
									index={index}
									onSelectQuestion={selectQuestion}
									isActive={activeQuestion === index ? true : false}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
})

export default Learn
