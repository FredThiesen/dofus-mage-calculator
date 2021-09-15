export const success = (value: number) => ({
	type: "SUCCESS",
	value: value,
})
export const failure = (value: number) => ({
	type: "FAILURE",
	value: value,
})
export const customValue = (value: number) => ({
	type: "CUSTOMVALUE",
	value: value,
})
