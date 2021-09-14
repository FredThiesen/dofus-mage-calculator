import { createStore, combineReducers } from "redux"
import { displayReducer } from "../reducers/displayReducer"

const rootReducer = combineReducers({
	display: displayReducer,
})

const store = createStore(rootReducer)

export default store
