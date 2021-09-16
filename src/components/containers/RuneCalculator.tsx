import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import {
	RuneQuantityContainer,
	RuneQuantityItem,
	RuneQuantityValue,
} from "../../styles/Containers"
import { vitalidade } from "./../../assets/img/images"
// import raVi from './../../assets/img/ra_vi'

// function filterRunes(runes: any) {
// 	let weights = Object.entries(runes.weights)
// 	console.table(weights)
// }

function RuneCalculator() {
	const raVi = vitalidade[1]
	const paVi = vitalidade[0]
	const value = useSelector((state: any) => state.display)

	const [paViQuantity, setPaViQuantity] = useState(0)
	const [raViQuantity, setRaViQuantity] = useState(0)

	useEffect(() => {
		setPaViQuantity(() => {
			return Math.floor(value / 3)
		})
		setRaViQuantity(() => {
			return Math.floor(value / 10)
		})
	}, [value])
	const isPaPositive = paViQuantity > 0 ? true : false
	const isRaPositive = raViQuantity > 0 ? true : false
	return (
		<RuneQuantityContainer>
			<RuneQuantityItem>
				Pa Vi:{" "}
				<RuneQuantityValue positive={isPaPositive}>
					{paViQuantity}x
				</RuneQuantityValue>
				<img src={paVi} height={40} width={40} key={2} alt={""} />
			</RuneQuantityItem>
			<RuneQuantityItem>
				Ra Vi:{" "}
				<RuneQuantityValue positive={isRaPositive}>
					{raViQuantity}x
				</RuneQuantityValue>
				<img src={raVi} height={40} width={40} key={1} alt={""} />
			</RuneQuantityItem>
		</RuneQuantityContainer>
	)
}

export default RuneCalculator
