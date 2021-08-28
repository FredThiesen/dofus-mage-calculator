import React, { Component } from "react"
import {
	Body,
	Display,
	Header,
	LeftBar,
	MainContainer,
	RightBar,
} from "../../styles/Containers"
import RuneBtn from "../buttons/RuneBtn"

export default class Home extends Component {
	render() {
		function handleClick() {
			console.log("teste")
		}
		return (
			<Body>
				<LeftBar>left bar</LeftBar>
				<MainContainer>
					<Header></Header>
				</MainContainer>
				<RightBar>
					<Display>+24</Display>
				</RightBar>
			</Body>
		)
	}
}
