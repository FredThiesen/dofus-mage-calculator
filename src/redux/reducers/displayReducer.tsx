export const displayReducer: any = (
	state = 0,
	action: { type: string; value: number }
) => {
	switch (action.type) {
		case "SUCCESS":
			return state - action.value
		case "FAILURE":
			return state + action.value
		default:
			return 0
	}
}
