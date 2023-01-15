import { useRouteData } from "@solidjs/router";
import { JokeData } from "./[id].data";

export default function JokeC() {
	const joke = useRouteData<typeof JokeData>();
	return (
		<>
			{JSON.stringify(joke())}
		</>
	);
}