import React from "react"
import images from "../../../assets/img/images"
interface RuneTypes {
	runeType: string
}
export default function RunePngs(props: RuneTypes) {
	function findType(item: any) {
		return item.name === props.runeType
	}
	const runeImages = images.filter(findType)
	const imgSize = runeImages[0].runes.length > 6 ? 40 : 50

	return (
		<>
			{runeImages[0].runes.map((rune: any, index) => {
				return (
					<img
						src={rune}
						height={imgSize}
						width={imgSize}
						key={index}
						alt={""}
					/>
				)
			})}
		</>
	)
}
