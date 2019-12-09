// import React from "react";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogInPage from './Pages/LogInPage';
import OptionsPage from './Pages/OptionsPage';
import DescriptionPage from './Pages/DescriptionPage';
import BuyPage from './Pages/BuyPage ';
import TicketPage from './Pages/TicketPage';
import MyConcertsPage from './Pages/MyConcertsPage';
import EventFormPage from './Pages/EventFormPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/LogInPage" component={LogInPage} />
				<Route exact path="/OptionsPage" component={OptionsPage} />
				<Route exact path="/DescriptionPage" component={DescriptionPage} />
				<Route exact path="/BuyPage" component={BuyPage} />
				<Route exact path="/TicketPage" component={TicketPage} />
				<Route exact path="/MyConcertsPage" component={MyConcertsPage} />
				<Route exact path="/EventFormPage" component={EventFormPage} />
			</Switch>
		</Router>
	);
}

export default App;
