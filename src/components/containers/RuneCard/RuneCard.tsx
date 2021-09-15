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
import { useDispatch } from "react-redux"
import { success, failure } from "../../../redux/actions/displayActions"
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
			<Card>
				<CardLeft>
					<Description>{props.description}</Description>
					<LeftBarButtonContainer>
						<LeftBarButton
							success={true}
							onClick={() => handleSuccess()}
						>
							Sucesso
						</LeftBarButton>
						<LeftBarButton onClick={() => handleFailure()}>
							Falha
						</LeftBarButton>
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
