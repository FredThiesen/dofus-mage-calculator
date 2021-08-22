import styled, { css } from "styled-components"

export const RuneButton = styled.button`
	background: #808080;
	border-radius: 3px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
	width: 90px;
	height: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: large;

	${(props) =>
		props.primary &&
		css`
			background: palevioletred;
			color: white;
		`};
`
