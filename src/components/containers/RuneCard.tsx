import React from "react"
import { Card, CardLeft, CardRight, TopBar } from "../../styles/Cards"

export default function RuneCard() {
	return (
		<Card>
			<CardLeft>{/* runes info */}</CardLeft>
			<CardRight>
				<TopBar></TopBar>
				{/* normal, pa, ra,
                runes png */}
			</CardRight>
		</Card>
	)
}
