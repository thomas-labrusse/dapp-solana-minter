import React from 'react'

// Import Components
import CandyMachine from '../CandyMachine/CandyMachine'

const RaceCard = ({ walletAddress }) => {
	return (
		<div>
			<CandyMachine walletAddress={window.solana} />
		</div>
	)
}

export default RaceCard
