import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";
import "./styles/styles.scss";


const store = configureStore();
const jsx = (
	<Provider store={store}>
		<AppRouter history={history} />
	</Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));