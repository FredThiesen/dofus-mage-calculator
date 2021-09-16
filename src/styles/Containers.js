import styled, { css } from "styled-components"

export const Body = styled.div`
	width: 100vw;
	height: 91%;
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
	overflow-y: auto;
`
export const Header = styled.div`
	width: 100%;
	height: 9%;
	position: sticky;
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
	justify-content: center;
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
export const CustomValueInput = styled.input`
	width: 30%;
	height: 35px;
	background: #666;
	border: none;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	color: palevioletred;
	font-size: 25px;
	letter-spacing: 2px;
	margin-top: 15px;
	margin-bottom: 15px;
`
export const FlexRow = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	width: 100%;
`
export const RuneQuantityContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;

	width: 50%;
	border: 2px solid palevioletred;
	border-radius: 7px;
	margin-top: 25px;
	height: 15%;
	background: #f0f0f0;
`
export const RuneQuantityItem = styled.div`
	height: 50%;
	font-size: 25px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: palevioletred;
`
export const RuneQuantityValue = styled.span`
	${(props) =>
		props.positive
			? css`
					color: green;
			  `
			: css`
					color: #666;
			  `}
	font-size: 30px;
`
