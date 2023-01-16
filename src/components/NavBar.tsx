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
						<For each={types}>
							{(type) =>
								<li class="nav-item">
									<A href={`/jokes/${type}/ten`} class="nav-link" aria-current="page">{type}</A>
								</li>
							}
						</For>
						<li class="nav-item">
							<div class="dropdown">
								<a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Dropdown link
								</a>

								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#">Action</a></li>
									<li><a class="dropdown-item" href="#">Another action</a></li>
									<li><a class="dropdown-item" href="#">Something else here</a></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav >
	);
}