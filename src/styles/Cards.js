import styled from "styled-components"

export const Card = styled.div`
	display: flex;
	align-items: center;
	width: 350px;
	height: 140px;
	border-radius: 7px;
	flex-direction: row;
	margin: 20px;
	border: 1.5px solid palevioletred;
`

export const CardLeft = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 45%;
	height: 100%;
	border-right: 1px solid palevioletred;
`

export const CardRight = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 55%;
`

export const TopBar = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 25%;
	width: 100%;
	border-bottom: 1px solid palevioletred;
`
export const TopBarButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 33.3333333333333%;
	border: none;
	height: 100%;
	background: ${(props) => (props.active ? "palevioletred" : "#f0f0f0")};
	color: ${(props) => (props.active ? "#f0f0f0" : "palevioletred")};
	box-shadow: 0px -1px 7px palevioletred;
	transition: 200ms;
`
export const Images = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
`
export const Description = styled.div`
	color: palevioletred;
	padding: 10px;
	font-weight: bold;
`
export const LeftBarButtonContainer = styled.div`
	display: flex;
	width: 100%;
`
export const LeftBarButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 33.3333333333333%;
	border: none;
	height: 25px;
	background: ${(props) => (props.success ? "palevioletred" : "#f0f0f0")};
	color: ${(props) => (props.success ? "#f0f0f0" : "palevioletred")};
	box-shadow: 0px -1px 7px palevioletred;
	transition: 200ms;
	width: 50%;

	&:active {
		transform: scale(1.1);
	}
`
