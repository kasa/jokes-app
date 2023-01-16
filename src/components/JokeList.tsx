import { For } from "solid-js";
import { Joke } from "../types";

export type JokeListProps = {
	jokes: Joke[];
};

export function JokeList(props: JokeListProps) {
	return (
		<div class="accordion" id="jokesAccordion">
			<For each={props.jokes}>
				{(joke: Joke) =>
					<div class="accordion-item">
						<h2 class="accordion-header" id={`heading_${joke.id}`}>
							<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${joke.id}`} aria-expanded="false" aria-controls={`collapse_${joke.id}`}>
								{joke.setup}
							</button>
						</h2>
						<div id={`collapse_${joke.id}`} class="accordion-collapse collapse" aria-labelledby={`heading_${joke.id}`} data-bs-parent="#jokesAccordion">
							<div class="accordion-body">
								<strong>{joke.punchline}</strong>
							</div>
						</div>
					</div>
				}
			</For>
		</div>
	);
}