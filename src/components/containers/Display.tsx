import React, { FC } from "react"
import { useSelector } from "react-redux"
import { DisplayContainer } from "../../styles/Containers"

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
