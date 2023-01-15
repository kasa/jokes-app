import { useRouteData } from "@solidjs/router";
import { createResource } from "solid-js";
import { JokeList } from "../components/JokeList";

const fetchJokes = async () => (await fetch("https://official-joke-api.appspot.com/jokes/ten")).json();

export function HomeData() {
	const [jokes] = createResource(fetchJokes);
	return jokes;
}

export default function Home() {
	const jokes = useRouteData<typeof HomeData>();
	return (
		<>
			<p>Jokes:</p>
			<JokeList jokes={jokes()} />
		</>
	);
}