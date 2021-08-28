import React from "react"
import { DisplayContainer } from "../../styles/Containers"

interface ValueProps {
	value: number
}

export default function Display(props: ValueProps) {
	return <DisplayContainer>{props.value}</DisplayContainer>
}
