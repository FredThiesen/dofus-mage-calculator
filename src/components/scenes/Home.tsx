import React, { Component } from "react"
import { Body } from "../../styles/Containers"
import RuneBtn from "../buttons/RuneBtn"

export default class Home extends Component {
	render() {
		function handleClick() {
			console.log("teste")
		}
		return (
			<Body>
				<RuneBtn label={"teste2"} onClick={() => handleClick()} />
			</Body>
		)
	}
}
