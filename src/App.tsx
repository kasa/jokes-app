import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import { NavBar } from "./components/NavBar.jsx";
import { HomeData } from "./pages/index.js";
import { JokeData } from "./pages/jokes/[id].data";
import JokeC from "./pages/jokes/[id].jsx";
import { JokeTypeC, JokeTypeData } from "./pages/jokes/[type]/index.jsx";

const Home = lazy(() => import("./pages/index.js"));

function App() {
	const commitHash = import.meta.env.VITE_HASH;

	return (
		<>
			<NavBar />
			<main class="container">
				<Routes>
					<Route path="/" component={Home} data={HomeData} />
					<Route path="/jokes">
						<Route path="/:type/ten" component={JokeTypeC} data={JokeTypeData} />
						<Route path="/:id" component={JokeC} data={JokeData} />
					</Route>
				</Routes>
			</main>
			<footer>
				<p>Hash: {commitHash}</p>
			</footer>
		</>
	);
}

export default App;
