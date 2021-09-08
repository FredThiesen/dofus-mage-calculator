import React, { Component } from "react"
import {
	Body,
	Content,
	Header,
	LeftBar,
	MainContainer,
	RightBar,
} from "../../styles/Containers"

import Display from "../containers/Display"
// import RuneCard from "../containers/RuneCard"
import runeData from "../../assets/runeData.json"
import RuneCard from "../containers/RuneCard"
function renderCards(runeData: any) {
	return runeData.map((runeGroup: any, index: number) => {
		console.log("runeGroup", runeGroup)

		const { normal, pa = null, ra = null } = runeGroup[1]

		console.log(normal)
		console.log(pa)
		console.log(ra)
		return <RuneCard normal={normal} pa={pa} ra={ra}></RuneCard>
	})
}
const runes = Object.entries(runeData.weights)
export default class Home extends Component {
	render() {
		console.log(runes[1][1])
		function handleClick() {
			console.log("teste")
		}
		return (
			<Body>
				<LeftBar>left bar</LeftBar>
				<MainContainer>
					<Header>aaa</Header>
					<Content>{renderCards(runes)}</Content>
				</MainContainer>
				<RightBar>
					<Display value={24}></Display>
				</RightBar>
			</Body>
		)
	}
}
