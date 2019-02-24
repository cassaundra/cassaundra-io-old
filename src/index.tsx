import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'

// highlight.js theme
import 'highlight.js/styles/nord.css'

import highlight from 'highlight.js'

import Home from './components/home/home';
import About from './components/about/about';
import NotFound from './components/notfound/notfound';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route component={NotFound} />
			</Switch>
		</div>
	</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

highlight.initHighlightingOnLoad();
