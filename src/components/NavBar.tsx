import { A } from "@solidjs/router";
import { For } from "solid-js";

export function NavBar() {
	const types = ["general", "programming", "knock-knock", "dad"];
	return (
		<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon" />
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav me-auto mb-2 mb-md-0">
						<li class="nav-item">
							<A href="/" class="nav-link" aria-current="page" end={true}>Home</A>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Joke Types
							</a>
							<ul class="dropdown-menu dropdown-menu-dark">
								<For each={types}>
									{(type) =>
										<li>
											<A href={`/jokes/${type}/ten`} class="dropdown-item" aria-current="page">{type}</A>
										</li>
									}
								</For>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav >
	);
}