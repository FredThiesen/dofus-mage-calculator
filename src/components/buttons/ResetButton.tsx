import React from "react"
import { useDispatch } from "react-redux"
import { ResetValue } from "../../styles/Buttons"

function ResetButton() {
	const dispatch = useDispatch()
	const handleReset = () => {
		dispatch({
			type: "CUSTOMVALUE",
			value: 0,
		})
	}
	return <ResetValue onClick={handleReset}>Reset</ResetValue>
}

export default ResetButton
