// import React from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogInPage from "./Pages/LogInPage";
import OptionsPage from "./Pages/OptionsPage";
import DescriptionPage from "./Pages/DescriptionPage";
import BuyPage from "./Pages/BuyPage";
import TicketPage from "./Pages/TicketPage";
import MyConcertsPage from "./Pages/MyConcertsPage";
import EventFormPage from "./Pages/EventFormPage";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LogInPage} />
				<Route exact path="/loginpage" component={LogInPage} />
				<Route exact path="/optionspage" component={OptionsPage} />
				<Route
					exact
					path="/descriptionpage"
					component={DescriptionPage}
				/>
				<Route exact path="/buypage" component={BuyPage} />
				<Route exact path="/ticketpage" component={TicketPage} />
				<Route
					exact
					path="/myconcertspage"
					component={MyConcertsPage}
				/>
				<Route exact path="/eventformpage" component={EventFormPage} />
			</Switch>
		</Router>
	);
}

export default App;
