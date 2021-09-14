import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import Global from "./styles/Global"

import store from "./redux/stores/displayStore"
import { Provider } from "react-redux"

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Global />
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById("root")
)
