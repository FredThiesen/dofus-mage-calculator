import React, { FC } from "react"
import { DisplayContainer } from "../../styles/Containers"
import { useSelector } from "react-redux"
import CustomInput from "./CustomInput"

const Display: FC = () => {
	const value = useSelector((state: any) => state.display)
	return (
		<>
			<DisplayContainer>
				{value > 0 && "+"}
				{value}
			</DisplayContainer>
		</>
	)
}

export default Display
