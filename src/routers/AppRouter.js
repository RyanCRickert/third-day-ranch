import React from "react";
import styled from "styled-components";
import {Router, Route, Switch,} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import createHistory from 'history/createBrowserHistory';

import About from "../components/About";
import NotFoundPage from "../components/NotFoundPage";
import Routes from "../routes/Routes";

export const history = createHistory();



export default class AppRouter extends React.Component {

	render() {
		return (
			<Router history={history}>
				<div>
					<Switch>
						<Routes />
					</Switch>
				</div>
			</Router>
		)
	}
};