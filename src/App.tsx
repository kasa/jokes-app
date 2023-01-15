import { Route, Routes } from "@solidjs/router";
import { Container } from "solid-bootstrap";
import { lazy } from "solid-js";
import { NavBar } from "./NavBar.jsx";
import { HomeData } from "./pages/index.js";
import { JokeData } from "./pages/jokes/[id].data";
import JokeC from "./pages/jokes/[id].jsx";
import { JokeTypeC, JokeTypeData } from "./pages/jokes/[type]/index.jsx";

const Home = lazy(() => import("./pages/index.js"));

function App() {
	return (
		<>
			<NavBar />
			<Container>
				<Routes>
					<Route path="/" component={Home} data={HomeData} />
					<Route path="/jokes">
						<Route path="/:type/ten" component={JokeTypeC} data={JokeTypeData} />
						<Route path="/:id" component={JokeC} data={JokeData} />
					</Route>
				</Routes>
			</Container>
		</>
	);
}

export default App;
