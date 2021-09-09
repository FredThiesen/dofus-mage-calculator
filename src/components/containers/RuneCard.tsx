import React, { useState } from "react"
import { RuneButton } from "../../styles/Buttons"
import {
	Card,
	CardLeft,
	CardRight,
	TopBar,
	TopBarButton,
} from "../../styles/Cards"
interface Weights {
	normal: number
	pa?: number
	ra?: number
	active?: boolean
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

	return (
		<>
			<Card>
				<CardLeft>{/* runes info */}</CardLeft>
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
					{/* normal, pa, ra,
                runes png */}
				</CardRight>
			</Card>
		</>
	)
}
