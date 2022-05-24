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
					question: 'What is a Finish Lines medal ?',
					answer: 'A NFT reserved to races finishers.',
				},
				{
					question: 'Why would I want one ?',
					answer:
						'A Finish Lines medal, just like a regular medal you can wear around your neck, is the proof and reward of your accomplishement. Cherish it, display it on social media or forget about it ',
				},
				{
					question: 'Where can I see my medal ?',
					answer:
						'You have several way of seeing your Finish Lines medals. Your NFT medal is linked to your wallet. In your Phantom wallet for instance, you can see all your NFTs in the "Your Collectibles". If you want to display exclusively your Finish Lines NFT, head to the "Cabinet" tab after connecting your Phantom wallet. There you can see all your medals with their specific data.',
				},
			],
		},
		{
			title: 'NFTs (Non Fungible Tokens)',
			questions: [
				{
					question: 'What is an NFT ?',
					answer:
						'A Non Fungible Tokens (NFT) is a digital asset with a unique identity recorded in a database (a blockchain). Its ownership can be tracked and proved. In the case of Finish Lines medals, the asset is an image with data (metadata) attached to it.',
				},
				{
					question: "Isn't it just a fancy jpeg ?",
					answer:
						'You can imagine a NFT as a certificate of ownership for anything digital. What you see is an image that can be a jpeg, a png or any format you can imagine. When you hold a NFT you are the proved owner of the asset (the image).',
				},
				{
					question: 'Where are NFT stored ?',
					answer:
						'The NFT itself is stored on a blockchain (a decentralized ledger, or record of transactions). The blockchain is maintain by many users, each having a copy of the entire records, making it very resistant to time or censorship. The NFT or token then points to the data - the image, or metadata if any -  you see on your screen.',
				},
			],
		},
		{
			title: 'Technical information',
			questions: [
				{
					question: 'On what blockchain are stored Finish Lines NFTs ?',
					answer:
						'Finish Lines NFTs are stored on the Solana blockchain, a proof of history / proof of stake blockchain.',
				},
				{
					question: 'What are the compatible wallets ?',
					answer: 'For now only Phantom wallets are supported.',
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
