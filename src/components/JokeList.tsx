import { A } from "@solidjs/router";
import { For } from "solid-js";
import { Joke } from "../types";

export type JokeListProps = {
	jokes: Joke[];
};

export function JokeList(props: JokeListProps) {
	return (
		<ul>
			<For each={props.jokes}>
				{(joke: Joke) =>
					<li>
						<A href={`/jokes/${joke.id}`}>{joke.id}: {joke.setup}</A>
					</li>
				}
			</For>
		</ul>
	);
}