import React, { useState } from "react"
import {
	Card,
	CardLeft,
	CardRight,
	TopBar,
	TopBarItem,
} from "../../styles/Cards"
interface Weights {
	normal: number
	pa?: number
	ra?: number
	active?: boolean
}

export default function RuneCard(props: Weights) {
	// const [active, setActive] = useState(false)
	return (
		<Card>
			<CardLeft>{/* runes info */}</CardLeft>
			<CardRight>
				<TopBar>
					<TopBarItem active={false}>Normal</TopBarItem>
					{props.pa && <TopBarItem active={false}>Pa</TopBarItem>}
					{props.ra && <TopBarItem active={true}>Ra</TopBarItem>}
				</TopBar>
				{/* normal, pa, ra,
                runes png */}
			</CardRight>
		</Card>
	)
}
