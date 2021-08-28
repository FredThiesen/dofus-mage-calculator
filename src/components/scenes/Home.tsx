import React, { Component } from "react"
import {
	Body,
	Header,
	LeftBar,
	MainContainer,
	RightBar,
} from "../../styles/Containers"
import RuneBtn from "../buttons/RuneBtn"
import Display from "../containers/Display"

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
					<Display value={24}></Display>
				</RightBar>
			</Body>
		)
	}
}
