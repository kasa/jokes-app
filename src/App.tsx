import { Component, createResource, For } from "solid-js";

const fetchJokes = async () => (await fetch("https://official-joke-api.appspot.com/jokes/programming/ten")).json();

type Joke = {
	id: number,
	setup: string,
	punchline: string,
}

const App: Component = () => {
	const [jokes] = createResource<Joke[]>(fetchJokes);
	return (
		<ul>
			<For each={jokes()}>
				{(joke: Joke) =>
					<li>{joke.id}: {joke.setup}</li>
				}
			</For>
		</ul >
	);
};

export default App;
