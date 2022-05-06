import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ethers } from 'ethers'

// // IMPORTING COMPONENTS
// import Header from './Components/Header/Header'
import Home from './Components/Pages/Home'
import MedalCabinet from './Components/Pages/MedalCabinet'
// import Hero from './Components/Hero/Hero'
// import Minter from './Components/Minter/Minter'
// import How from './Components/How/How'
// import Learn from './Components/Learn/Learn'
// import Footer from './Components/Footer/Footer'
// import Cabinet from './Components/Cabinet/Cabinet'

// STYLES
import './App.scss'

//NOTE: fix for Buffer undefined error
// import { Buffer } from 'buffer'
// window.Buffer = Buffer

const provider = new ethers.providers.Web3Provider(window.ethereum)
console.log('Provider Metamask:', provider)

function App() {
	const [walletAddress, setWalletAddress] = useState('')

	const checkWalletConnection = async () => {
		try {
			const { solana } = window

			if (solana && solana.isPhantom) {
				console.log('👻 Phantom wallet found ! 👻')
				const response = await solana.connect({ onlyIfTrusted: true })
				console.log('Connected with Public Key:', response.publicKey.toString())
				setWalletAddress(response.publicKey.toString())
			} else {
				alert('Solana wallet not found, Get a Phantom Wallet.')
			}
		} catch (error) {
			console.error(error)
		}
	}

	// const connectWalletHandler = async () => {
	// 	console.log('connecting...')
	// 	if (provider) {
	// 		try {
	// 			// Using ethers method
	// 			const addressArray = await provider.send('eth_requestAccounts', [])
	// 			const address = addressArray[0]
	// 			console.log(address)
	// 			setWalletAddress(address)
	// 		} catch (err) {
	// 			// TODO: implement logic if user refuses to connect
	// 			console.log(err)
	// 		}
	// 	}
	// }

	const connectWalletHandler = async () => {
		const { solana } = window
		if (solana) {
			const response = await solana.connect()
			console.log('Connected with Public Key:', response.publicKey.toString())
			setWalletAddress(response.publicKey.toString())
		}
	}

	// const onAccountChanged = () => {
	// 	if (provider) {
	// 		window.ethereum.on('accountsChanged', (accounts) => {
	// 			if (accounts.length > 0) {
	// 				console.log('Account change detected:', accounts)
	// 				setWalletAddress(accounts[0])
	// 			} else {
	// 				setWalletAddress('')
	// 			}
	// 		})
	// 	} else {
	// 		console.log('You must install MM')
	// 	}
	// }

	// const getCurrentWalletConnected = async () => {
	// 	if (provider) {
	// 		try {
	// 			const addressArray = await window.ethereum.request({
	// 				method: 'eth_accounts',
	// 			})
	// 			const address = addressArray[0]
	// 			console.log('Wallet currently connected :', address)
	// 			setWalletAddress(address)
	// 		} catch (err) {
	// 			console.log(err)
	// 		}
	// 	}
	// }

	// useEffect(() => {
	// 	const fetchWalletConnected = async () => {
	// 		await getCurrentWalletConnected()
	// 	}
	// 	fetchWalletConnected()
	// }, [])

	// useEffect(() => {
	// 	onAccountChanged()
	// }, [])

	// Checking for Phantom wallet connection on every render
	useEffect(() => {
		const onLoad = async () => {
			await checkWalletConnection()
		}
		window.addEventListener('load', onLoad)
		return () => window.removeEventListener('load', onLoad)
	})

	return (
		<Router>
			{/* <Header walletAddress={walletAddress} onConnect={connectWalletHandler} /> */}
			<Routes>
				<Route
					path='/'
					element={
						<Home
							walletAddress={walletAddress}
							onConnect={connectWalletHandler}
							page={'Home'}
						/>
					}
				/>
				<Route
					path='/cabinet'
					element={
						<MedalCabinet
							walletAddress={walletAddress}
							page={'Cabinet'}
							onConnect={connectWalletHandler}
						/>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App
