import React, { Component } from 'react';
import './page.css';
import { Navbar, Nav, Container, NavDropdown, Col } from 'react-bootstrap';

class Page extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">cassaundra</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Projects" id="projects">
                            <NavDropdown.Item href="https://github.com/cassaundra/rocket">Rocket</NavDropdown.Item>
								<NavDropdown.Divider/>
								<NavDropdown.Header>Early Development</NavDropdown.Header>
								<NavDropdown.Item href="https://github.com/cassaundra/ntx">NTX</NavDropdown.Item>
								<NavDropdown.Item href="https://github.com/cassaundra/texnical">TeXnical</NavDropdown.Item>
								<NavDropdown.Item href="https://github.com/liberejo/liberejo">Liberejo</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                <Container>
                    <Col>
                        {this.props.children}
                    </Col>
                </Container>
				<div className="crypto-footer">
					<p>BTC: <code>13wXDHFfLw4UVgfMY6Md9XQRp6mAnbLTGf</code></p>
			 		<p>XMR: <code>8AXRLjdDLuaW6RK4fU9NvRgPQh6Ri2qT3ZkHXPrptrFzfmLZw75kra1VLEWwzEt4jYBUEHA5bG7k3GU4a1XbMJNPN9ExY3q</code></p>
				</div>
            </div>
        );
    }
}

export default Page;
