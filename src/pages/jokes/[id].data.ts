import { RouteDataFuncArgs } from "@solidjs/router";
import { createResource } from "solid-js";

const fetchJokes = async (id: number) => (await fetch(`https://official-joke-api.appspot.com/jokes/${id}`)).json();

//Data function
export function JokeData({ params }: RouteDataFuncArgs) {
	const [joke] = createResource(() => Number(params.id), fetchJokes);
	return joke;
}
