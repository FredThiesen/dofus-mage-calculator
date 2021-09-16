import React, { Component } from "react"
// import RuneCard from "../containers/RuneCard"
import runeData from "../../assets/runeData.json"
import {
	Body,
	Content,
	Header,
	LeftBar,
	MainContainer,
	RightBar,
} from "../../styles/Containers"
import ResetButton from "../buttons/ResetButton"
import CustomInput from "../containers/CustomInput"
import Display from "../containers/Display"
import RuneCalculator from "../containers/RuneCalculator"
import RuneCard from "../containers/RuneCard/RuneCard"
import RuneSelect from "../containers/Select/RuneSelect"

function renderCards(runeData: any) {
	return runeData.map((runeGroup: any, index: number) => {
		const { normal, pa = null, ra = null, type, description } = runeGroup[1]
		return (
			<RuneCard
				normal={normal}
				pa={pa}
				ra={ra}
				type={type}
				description={description}
			/>
		)
	})
}
const runes = Object.entries(runeData.weights)
export default class Home extends Component {
	render() {
		return (
			<>
				<Header>aaa</Header>
				<Body>
					<LeftBar>left bar</LeftBar>
					<MainContainer>
						<Content>{renderCards(runes)}</Content>
					</MainContainer>
					<RightBar>
						<CustomInput />
						<Display />
						<ResetButton />
						<RuneCalculator />
					</RightBar>
				</Body>
			</>
		)
	}
}
