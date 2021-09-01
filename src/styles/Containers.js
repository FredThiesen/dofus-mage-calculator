import styled from "styled-components"

export const Body = styled.div`
	width: 100vw;
	height: 100vh;
	background: #f0f0f0;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	overflow: hidden;
`
export const LeftBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10%;
	height: 100;

	border: 1px solid palevioletred;
`
export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	height: 100%;
`
export const Header = styled.div`
	width: 100%;
	height: 13%;
	background: palevioletred;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`

//header
export const RightBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	border: 1px solid palevioletred;
	width: 25%;
	height: 100%;
`
export const DisplayContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 15%;
	width: 50%;
	background: #666;
	border-radius: 10px;
	color: palevioletred;
	font-size: 3rem;
`
export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 65px;
	flex-wrap: wrap;
`
