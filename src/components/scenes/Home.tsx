import React, { Component } from "react"
import {
	Body,
	Content,
	Header,
	LeftBar,
	MainContainer,
	RightBar,
} from "../../styles/Containers"
import RuneBtn from "../buttons/RuneBtn"
import Display from "../containers/Display"
import RuneCard from "../containers/RuneCard"

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
					<Content>
						<RuneCard />
						<RuneCard />
						<RuneCard />
						<RuneCard />
						<RuneCard />
						<RuneCard />
						<RuneCard />
					</Content>
				</MainContainer>
				<RightBar>
					<Display value={24}></Display>
				</RightBar>
			</Body>
		)
	}
}
