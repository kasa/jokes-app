import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./pages/index.js"));

function App() {
	return (
		<>
			<Routes>
				<Route path="/" component={Home} />
			</Routes>
		</>
	);
}

export default App;
