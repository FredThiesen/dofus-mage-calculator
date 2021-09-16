import React, { useState } from "react"
import Select from "react-dropdown-select"
import { useSelector } from "react-redux"
import { FlexRow } from "../../../styles/Containers"

function RuneSelect() {
	const [selectedValue, setSelectedValue] = useState([{ name: "12" }])
	const options: any = [
		{ id: 1, name: "pa vi", value: "pavi" },
		{ name: "ra vi" },
	]
	const value = useSelector((state: any) => state.display)
	return (
		<form>
			<FlexRow>
				<Select
					options={options}
					values={[selectedValue[0]]}
					searchable={false}
					required
					labelField={options.name}
					name="select"
					style={{
						width: 100,
						background: "#666",
						color: "palevioletred",
					}}
					onChange={(value: any) => setSelectedValue(value)}
				/>
			</FlexRow>
		</form>
	)
}

export default RuneSelect
