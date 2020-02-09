import React, { Component, MouseEvent } from 'react';
import './home.css';
import Page from '../page/page';

const addressObfuscated = [0x64, 0x63, 0x74, 0x75, 0x41, 0x65, 0x62, 0x75, 0x74, 0x63, 0x76, 0x70, 0x65, 0x74, 0x62, 0x30, 0x6A, 0x71];

type HomeState = {
	email?: string
}

class Home extends Component<object, HomeState> {
	readonly state: Readonly<HomeState> = {
		email: undefined,
	}

	showState = (event: MouseEvent) => {
		event.preventDefault();

		let address = String.fromCharCode.apply(null, addressObfuscated.map((a, i) => a - 1 - (i % 2)));

		this.setState({
			email: address,
		});
	}

	renderEmail = () => {
		if (this.state.email) {
			return <a href={"mailto:" + this.state.email} className="email">{this.state.email}</a>
		} else {
			return <span onClick={this.showState} className="hidden_email">[click to reveal]</span>
		}
	}

	render() {
		return (
			<Page>
				<h1><b>Welcome</b></h1>

				<p>Thanks for stopping by.</p>

				<p>Email me at {this.renderEmail()} or visit me at:</p>
				<ul>
					<li><a href="https://github.com/cassaundra">GitHub</a></li>
					<li><a href="https://blog.cassaundra.io">Blog</a></li>
				</ul>
			</Page>
		);
	}
}

export default Home;
