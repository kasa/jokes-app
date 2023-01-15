import { createResource, For } from "solid-js";

const fetchJokes = async () => (await fetch("https://official-joke-api.appspot.com/jokes/programming/ten")).json();

type Joke = {
	id: number,
	setup: string,
	punchline: string,
}

export default function Home() {
	const [jokes] = createResource<Joke[]>(fetchJokes);
	return (
		<>
			<p>Jokes:</p>
			<ul>
				<For each={jokes()}>
					{(joke: Joke) =>
						<li>{joke.id}: {joke.setup}</li>
					}
				</For>
			</ul>
		</>
	);
}