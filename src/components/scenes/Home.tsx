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

const runes = Object.entries(runeData.weights)
export default class Home extends Component {
	render() {
		console.log(runes)
		function handleClick() {
			console.log("teste")
		}
		return (
			<Body>
				<LeftBar>left bar</LeftBar>
				<MainContainer>
					<Header></Header>
					<Content>
						{/* <RuneCard normal={}/>
						<RuneCard />
						<RuneCard />
						<RuneCard />
						<RuneCard />
						<RuneCard />
						<RuneCard /> */}
					</Content>
				</MainContainer>
				<RightBar>
					<Display value={24}></Display>
				</RightBar>
			</Body>
		)
	}
}
