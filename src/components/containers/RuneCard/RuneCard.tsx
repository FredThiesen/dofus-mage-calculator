import React, { useState } from "react"
import { RuneButton } from "../../../styles/Buttons"
import {
	Card,
	CardLeft,
	CardRight,
	Description,
	Images,
	LeftBarButton,
	LeftBarButtonContainer,
	TopBar,
	TopBarButton,
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
	// const [active, setActive] = useState(false)
	const [normalActive, setNormalActive] = useState(true)
	const [paActive, setPaActive] = useState(false)
	const [raActive, setRaActive] = useState(false)
	let selectedValue: number | undefined

	const handleNormalClick = () => {
		setNormalActive(true)
		setPaActive(false)
		setRaActive(false)
		selectedValue = props.normal
	}
	const handlePaClick = () => {
		setNormalActive(false)
		setPaActive(true)
		setRaActive(false)
		selectedValue = props.pa
	}
	const handleRaClick = () => {
		setNormalActive(false)
		setPaActive(false)
		setRaActive(true)
		selectedValue = props.ra
	}
	const runeType = props.type
	return (
		<>
			<Card>
				<CardLeft>
					<Description>{props.description}</Description>
					<LeftBarButtonContainer>
						<LeftBarButton success={true}>Sucesso</LeftBarButton>
						<LeftBarButton>Falha</LeftBarButton>
					</LeftBarButtonContainer>
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
		</>
	)
}
