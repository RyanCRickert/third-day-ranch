import React from "react";
import {Router, Switch} from "react-router-dom";
import { createBrowserHistory as createHistory } from 'history';

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