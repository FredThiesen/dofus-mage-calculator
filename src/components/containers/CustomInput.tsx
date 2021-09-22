import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { SubmitValue } from "../../styles/Buttons"
import { CustomValueInput, FlexRow } from "../../styles/Containers"
import { customValue } from "../../redux/actions/displayActions"
export default function CustomInput() {
	const dispatch = useDispatch()
	const [value, setValue] = useState<number>(0)

	const handleChange = (event: {
		target: { value: React.SetStateAction<number> }
	}) => {
		setValue(Number(event.target.value))
	}
	const handleSubmit = () => {
		value > 999 ? dispatch(customValue(999)) : dispatch(customValue(value))
	}
	return (
		<>
			<FlexRow>
				<CustomValueInput
					placeholder={0}
					type={"number"}
					onChange={handleChange}
				/>
				<SubmitValue onClick={handleSubmit}>Alterar!</SubmitValue>
			</FlexRow>
		</>
	)
}
