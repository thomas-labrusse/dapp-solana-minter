import React from 'react'

import Header from '../Header/Header'
import CabinetHeader from '../Cabinet/CabinetHeader'
import Cabinet from '../Cabinet/Cabinet'
import Footer from '../Footer/Footer'

function MedalCabinet(props) {
	return (
		<>
			<Header
				walletAddress={props.walletAddress}
				onConnect={props.onConnect}
				page={props.page}
			></Header>
			<CabinetHeader />
			<Cabinet walletAddress={props.walletAddress} />
			<Footer page={props.page} />
		</>
	)
}
export default MedalCabinet
