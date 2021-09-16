import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {
	Card,
	CardLeft,
	CardRight,
	CardWrapper,
	Description,
	Images,
	LeftBarButton,
	LeftBarButtonContainer,
	LeftBarButtonWrapper,
	TopBar,
	TopBarButton,
	WeightsDisplay,
} from "../../../styles/Cards"
import RunePngs from "./RunePngs"
interface Weights {
	normal: number
	pa?: number
	ra?: number
	active?: boolean
	type: string
	description: string
}

export default function RuneCard(props: Weights) {
	const dispatch = useDispatch()
	// const [active, setActive] = useState(false)
	const [normalActive, setNormalActive] = useState(true)
	const [paActive, setPaActive] = useState(false)
	const [raActive, setRaActive] = useState(false)
	const [selectedValue, setSelectedValue] = useState<number>(props.normal)

	const handleSuccess = () => {
		dispatch({
			type: "SUCCESS",
			value: selectedValue,
		})
	}
	const handleFailure = () => {
		dispatch({
			type: "SUCCESS",
			value: selectedValue,
		})
	}
	const handleDown = () => {
		dispatch({
			type: "FAILURE",
			value: selectedValue,
		})
	}
	const handleNormalClick = () => {
		setNormalActive(true)
		setPaActive(false)
		setRaActive(false)
		setSelectedValue(props.normal)
	}
	const handlePaClick = () => {
		setNormalActive(false)
		setPaActive(true)
		setRaActive(false)
		props.pa && setSelectedValue(props.pa)
	}
	const handleRaClick = () => {
		setNormalActive(false)
		setPaActive(false)
		setRaActive(true)
		props.ra && setSelectedValue(props.ra)
	}
	const runeType = props.type
	return (
		<>
			<CardWrapper>
				<WeightsDisplay>
					<div>{props.normal}</div>
					<div>{props.pa ? props.pa : null}</div>
					<div>{props.ra ? props.ra : null}</div>
				</WeightsDisplay>
				<Card>
					<CardLeft>
						<Description>{props.description}</Description>
						{/* <LeftBarButtonWrapper> */}
						{/* <LeftBarButton upper onClick={() => handleFailure()}>
							Runa Falhou
						</LeftBarButton> */}
						<LeftBarButtonContainer>
							<LeftBarButton
								success={true}
								onClick={() => handleSuccess()}
							>
								Entrou
							</LeftBarButton>
							<LeftBarButton onClick={() => handleDown()}>
								Caiu
							</LeftBarButton>
						</LeftBarButtonContainer>
						{/* </LeftBarButtonWrapper> */}
						{/* runes info */}
					</CardLeft>
					<CardRight>
						<TopBar>
							<TopBarButton
								active={normalActive}
								onClick={() => handleNormalClick()}
							>
								Normal
							</TopBarButton>
							{props.pa && (
								<TopBarButton
									active={paActive}
									onClick={() => handlePaClick()}
								>
									Pa
								</TopBarButton>
							)}
							{props.ra && (
								<TopBarButton
									topRight
									active={raActive}
									onClick={() => handleRaClick()}
								>
									Ra
								</TopBarButton>
							)}
						</TopBar>
						<Images>
							<RunePngs runeType={runeType} />
							{/* {images.elemental.map((rune) => {
							return <img src={rune} height={50} width={50} />
						})} */}
						</Images>
					</CardRight>
				</Card>
			</CardWrapper>
		</>
	)
}
