import { RouteDataFuncArgs, useParams, useRouteData } from "@solidjs/router";
import { createResource } from "solid-js";
import { JokeList } from "../../../components/JokeList";

const fetchJokes = async (type: string) => (await fetch(`https://official-joke-api.appspot.com/jokes/${type}/ten`)).json();

export function JokeTypeData({ params }: RouteDataFuncArgs) {
	const [jokes] = createResource(() => params.type, fetchJokes);
	return jokes;
}

export function JokeTypeC() {
	const params = useParams();
	const jokes = useRouteData<typeof JokeTypeData>();
	return (
		<>
			<p>{params.type}</p>
			<JokeList jokes={jokes()} />
		</>
	);
}