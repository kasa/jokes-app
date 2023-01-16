/* @refresh reload */
import { hashIntegration, Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./App";

render(
	() => (
		<Router base="/jokes-app" source={hashIntegration()}>
			<App />
		</Router>
	),
	document.getElementById("root") as HTMLElement);
