/* @refresh reload */
import { hashIntegration, Router } from "@solidjs/router";
import { render } from "solid-js/web";
import App from "./App";
import "./assets/index.js";
import "./assets/index.scss";

render(
	() => (
		<Router source={hashIntegration()}>
			<App />
		</Router>
	),
	document.getElementById("root") as HTMLElement);
