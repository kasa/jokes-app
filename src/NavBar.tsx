import { Container, Nav, Navbar, NavDropdown } from "solid-bootstrap";

export function NavBar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav class="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<NavDropdown title="Type" id="basic-nav-dropdown">
							<NavDropdown.Item href="/jokes-app/jokes/programming/ten">Programming</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}