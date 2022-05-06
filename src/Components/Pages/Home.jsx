import React, { useRef } from 'react'

import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Minter from '../Minter/Minter'
import How from '../How/How'
import Learn from '../Learn/Learn'
import Footer from '../Footer/Footer'

const Home = (props) => {
	const mintRef = useRef()
	const learnRef = useRef()
	return (
		<>
			<Header
				walletAddress={props.walletAddress}
				onConnect={props.onConnect}
				page={props.page}
			></Header>
			<Hero learnRef={learnRef} mintRef={mintRef} />
			<Minter walletAddress={props.walletAddress} ref={mintRef}></Minter>
			<How />
			<Learn ref={learnRef} />
			<Footer page={props.page} />
		</>
	)
}

export default Home
