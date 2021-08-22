import React, { Component } from "react"
import { RuneButton } from "../../styles/Buttons"
// extends React.HTMLAttributes<HTMLElement>
interface ButtonProps {
	label?: string
	onClick?: (e?: React.MouseEvent) => void
}
export default class RuneBtn extends Component<ButtonProps> {
	render() {
		return (
			<RuneButton onClick={this.props.onClick}>
				{this.props.label}
			</RuneButton>
		)
	}
}
