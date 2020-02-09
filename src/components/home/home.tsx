import React, { Component } from 'react';
import './home.css';
import Page from '../page/page';

class Home extends Component {
	render() {
		return (
			<Page>
				<h1><b>Welcome</b></h1>

				<p>Thanks for stopping by.</p>

				<p>Email me at <a href="mailto:cass@cassaundra.io">cass@cassaundra.io</a> or visit me at:</p>
				<ul>
					<li><a href="https://github.com/cassaundra">GitHub</a></li>
					<li><a href="https://blog.cassaundra.io">Blog</a></li>
				</ul>
			</Page>
		);
	}
}

export default Home;
