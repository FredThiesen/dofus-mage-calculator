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
		const { normal, pa = null, ra = null } = runeGroup[1]
		return <RuneCard normal={normal} pa={pa} ra={ra} />
	})
}
const runes = Object.entries(runeData.weights)
export default class Home extends Component {
	render() {
		function handleClick() {}
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
