/* @refresh reload */
import { Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./App";

render(
	() => (
		<Router base="/jokes-app">
			<App />
		</Router>
	),
	document.getElementById("root") as HTMLElement);
