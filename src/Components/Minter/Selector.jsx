import React from 'react'

import styles from './Selector.module.scss'

const races = [
	{
		name: 'London Marathon 2022',
		id: '1',
		mintPrice: '0.001',
		contract: '0xBF33f47965379fB4187Db07E7398c8a3eFa9265a',
	},
	{
		name: 'Paris Marathon 2022',
		id: '2',
		mintPrice: '0.001',
		contract: '0xD560B317416E1FE2781C8a0b88A1DC04F611E5b7',
	},
	{
		name: 'Ironman 70.3 Vichy 2022',
		id: '3',
		mintPrice: '0.001',
		contract: '0x8EC38C64Dd165B0B1b756104ACd4377840fCD9a5',
	},
]

const Selector = (props) => {
	const selectRaceHandler = (e) => {
		let id = e.target.value
		const race = races.filter((race) => race.id === id)
		props.onSelect(race[0])
	}

	return (
		<>
			<div className={styles['selector-container']}>
				<select onChange={selectRaceHandler}>
					<option value='' selected disabled>
						Select a race
					</option>
					{races.map((race) => {
						const { name, id } = race
						return (
							<option key={id} value={id}>
								{name}
							</option>
						)
					})}
				</select>
			</div>
		</>
	)
}

export default Selector
