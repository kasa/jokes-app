/* @refresh reload */
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import App from "./App";

render(
	() => (
		<Router base="/jokes-app">
			<App />
		</Router>
	),
	document.getElementById("root") as HTMLElement);
