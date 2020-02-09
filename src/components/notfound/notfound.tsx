import React, { Component } from 'react';
import Page from '../page/page';
import './notfound.css';

class NotFound extends Component {
	render() {
		return (
			<Page>
				<h1 style={{ textAlign: "center" }} className="display-3">404</h1>
				<p style={{ textAlign: "center" }}>:-(</p>
			</Page>
		);
	}
}

export default NotFound;
