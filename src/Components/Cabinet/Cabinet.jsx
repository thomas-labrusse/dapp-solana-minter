import React, { useEffect, useState, useCallback } from 'react'
//SOLANA
import { Connection } from '@solana/web3.js'
import { Metadata } from '@metaplex-foundation/mpl-token-metadata'

//SOLANA
import axios from 'axios'

import Medal from './Medal'
import MedalDescription from './MedalDescription'
import Button from '../UI/Button'
// import Spinner from '../UI/Spinner'

import styles from './Cabinet.module.scss'

import ButtonArrow from '../UI/Button-arrow'
import { toIpfsLink } from '../../utils'

const Cabinet = (props) => {
	const [ownedTokens, setOwnedTokens] = useState([])
	const [tokensData, setTokensData] = useState([])
	const [currentToken, setCurrentToken] = useState(0)
	// const [spinner, setSpinner] = useState(false)

	const navUp = () => {
		// if only one token, do nothing
		if (tokensData.length <= 1) return

		// if current token is the last one, come back to start
		if (currentToken === tokensData.length - 1) {
			setCurrentToken(0)
		} else {
			setCurrentToken((prev) => prev + 1)
		}
	}
	const navDown = () => {
		// if only one token, do nothing
		if (tokensData.length <= 1) return

		// if current token is the first one, go to the end
		if (currentToken === 0) {
			setCurrentToken(tokensData.length - 1)
		} else {
			setCurrentToken((prev) => prev - 1)
		}
	}

	const verifyHoldings = useCallback(async () => {
		//NOTE: SOLANA verify holdings in Phantom wallet, see https://solanacookbook.com/references/nfts.html#candy-machine-v2
		//NOTE: only working with @metaplex-foundation/mpl-token-metadata versions 1.2, not 2.0 where findDataByOwner is deprecated
		//NOTE: Only works with @solana/spl-token@0.1.8, (0.2.0 doesn't not include the u64.fromBuffer method)
		//NOTE: Will be replaced by a new Metaplex SDK, see : https://github.com/metaplex-foundation/metaplex-program-library/pull/351
		const rpcHost = process.env.REACT_APP_SOLANA_RPC_URL
		console.log('RPC HOST:', rpcHost)
		try {
			const connection = new Connection(rpcHost)
			console.log('Connection object:', connection)

			const ownerPublickey = props.walletAddress
			console.log('Owner Public Key:', ownerPublickey)

			const nftsMetadata = await Metadata.findDataByOwner(
				connection,
				ownerPublickey
			)

			console.log('Metadata :', nftsMetadata)
			// //TODO: Filter programs to keep only Finish Lines related ones
			setOwnedTokens(nftsMetadata)
		} catch (error) {
			console.error(error)
		}
	}, [props.walletAddress])

	//Retrieving holdings whenever the wallet connected changes

	useEffect(() => {
		// console.log('Verify Holdings use effect')
		// console.log('Connected wallet :', props.walletAddress)
		const asyncVerifyHoldings = async () => {
			await verifyHoldings()
		}
		asyncVerifyHoldings()
	}, [verifyHoldings])

	useEffect(() => {
		if (ownedTokens.length > 0) {
			console.log('Fetch tokens data use effect')
			Promise.all(
				ownedTokens.map((token) =>
					axios({
						method: 'get',
						//NOTE: use ipfs link utils to manage metadata stored on IPFS
						// url: `${token.includes('ipfs') ? toIpfsLink(token) : token}`,
						url: toIpfsLink(token.data.uri),
					}).then((res) => res.data)
				)
			).then((results) => setTokensData(results))
		}
	}, [ownedTokens])

	return (
		<div className={styles['cabinet-container']}>
			{/* {tokensData.length > 0 && !spinner ? ( */}
			{tokensData.length > 0 ? (
				<div className={styles['cabinet']}>
					<MedalDescription token={tokensData[currentToken]} />
					<div>
						<ButtonArrow
							link={'./img/icons/arrow-left.svg'}
							onClick={navDown}
						></ButtonArrow>
					</div>
					<div className={styles.medals}>
						{tokensData.map((token, index) => {
							return (
								<div
									className={`${styles.medal} ${
										index === currentToken ? styles.active : ''
									}`}
								>
									{index === currentToken && <Medal token={token} />}
								</div>
							)
						})}
					</div>
					<div>
						<ButtonArrow
							link={'./img/icons/arrow-right.svg'}
							onClick={navUp}
						></ButtonArrow>
					</div>
				</div>
			) : (
				<></>
			)}
			{/* {!tokensData.length > 0 && !spinner ? ( */}
			{!tokensData.length > 0 ? (
				<div className={styles['display-medal-button-container']}>
					<Button onClick={verifyHoldings}>Display my medals</Button>
				</div>
			) : (
				<></>
			)}
			{/* {spinner ? <Spinner /> : <></>} */}
		</div>
	)
}

export default Cabinet
/*
{"description":"The Schneider Electric Marathon de Paris is now one of the biggest marathons in the world, as much for the size of its field as the performances of its runners. Each finisher comes home with incredible memories. Tens of thousands of runners come to tackle the most fabled long-distance discipline in athletics. This race across Paris, taking in the Champs Elysées, the Bois de Vincennes and Boulogne, offers an incomparable backdrop, with spectacular views and landmarks all along the route.",
"id":1,
"name":"Medal #1",
"image":"ipfs://QmV9rjkvhs5pqe4dvYhnj1zqaXB57upxvh1Ntocffj42uQ",
"attributes":[
	{"trait_type":"Race name", "value":"Paris Marathon"},
	{"trait_type":"Race date","value":"2022-04-03T00:00:00.000Z"},
	{"trait_type":"Race distance","value":"42.195km"}]}
	*/

//SOLANA --------

// {"name":"Vichy IM70.3","symbol":"FL","description":"Ironman 70.3 Vichy 2022. Digital medal for race finishers, by Finish Lines","image":"https://www.arweave.net/GAKJ7Pm9dIdBSKUUwH5mnQo3ZAj-XdBvCkKs7HsnvXI?ext=png","properties":{"files":[{"uri":"https://www.arweave.net/GAKJ7Pm9dIdBSKUUwH5mnQo3ZAj-XdBvCkKs7HsnvXI?ext=png","type":"image/png"}],"creators":[{"address":"4mS2PBsUVhPdoqRhaBGF9hXeRLZPB7BkriUxECRrQhz6","share":100}]},"attributes":[{"trait_type":"Race name","value":"Ironman 70.3 Vichy"},{"trait_type":"Race date","value":"2022-08-20T00:00:00.000Z"},{"trait_type":"Race distance","value":"113km / 70.3-mile"}]}

// Response from Solana web3 request for Metadata
// 	({
// 		key: 4,
// 		updateAuthority: '6PBzcvLCijKEJYywY9mzx5zXn5hXmJBoM1L4FR4ugzb7',
// 		mint: 'CRiyf6PoSWTHXMuFQmqkqY9khCTCQYcJmRh2xWQuH1oP',
// 		data: {
// 			name: 'Paris Marathon',
// 			symbol: 'FL',
// 			uri: 'https://arweave.net/7N0em3Ld_MnUqmOQyXuhh3j1N2nVVGnmCvFBS8r5Ho8',
// 			sellerFeeBasisPoints: 0,
// 			creators: [
// 				{
// 					address: '87QKxfgYFFnbT3keqnmbAsf8JQCZJQQrzxZSZaxa1o8d',
// 					verified: 1,
// 					share: 0,
// 				},
// 				{
// 					address: '4mS2PBsUVhPdoqRhaBGF9hXeRLZPB7BkriUxECRrQhz6',
// 					verified: 0,
// 					share: 100,
// 				},
// 			],
// 		},
// 		primarySaleHappened: 1,
// 		isMutable: 1,
// 		editionNonce: 255,
// 		tokenStandard: 0,
// 	},
// 	{
// 		key: 4,
// 		updateAuthority: '6PBzcvLCijKEJYywY9mzx5zXn5hXmJBoM1L4FR4ugzb7',
// 		mint: '26GRKtBdtygawpcDC5YfWgEPuyFLmqjA579ZdW1hyPko',
// 		data: {
// 			name: 'Vichy IM70.3',
// 			symbol: 'FL',
// 			uri: 'https://arweave.net/0_4ZVGWY9OByxUTqxC9Qcqe8j2EWmZSvdqoT30G0yss',
// 			sellerFeeBasisPoints: 0,
// 			creators: [
// 				{
// 					address: '87QKxfgYFFnbT3keqnmbAsf8JQCZJQQrzxZSZaxa1o8d',
// 					verified: 1,
// 					share: 0,
// 				},
// 				{
// 					address: '4mS2PBsUVhPdoqRhaBGF9hXeRLZPB7BkriUxECRrQhz6',
// 					verified: 0,
// 					share: 100,
// 				},
// 			],
// 		},
// 		primarySaleHappened: 1,
// 		isMutable: 1,
// 		editionNonce: 254,
// 		tokenStandard: 0,
// 	})
// ]
