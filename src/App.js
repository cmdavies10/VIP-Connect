// import React, { Component } from 'react';

// import Validate from "./components/Validation";

import React from "react";
import NavBar from "./components/NavBar";

import MainTitle from "./components/LoginPage/MainTitle";
import LogInForm from "./components/LoginPage/LogInForm";
import ButtonCreate from "./components/LoginPage/ButtonCreate";
import OptionsTitle from "./components/OptionsPage/OptionsTitle";
import OptionsCard from "./components/OptionsPage/OptionsCard";
import ButtonSubmit from "./components/OptionsPage/ButtonSubmit";
import MyConcertsCard from "./components/MyConcertsPage/MyConcertsCard";
import MyConcertsTitle from "./components/MyConcertsPage/MyConcertsTitle";
// import ButtonSubmit from './components/MyConcertsPage/ButtonSubmit'
import CreateTitle from "./components/EventFormPage/CreateTitle";
import CreateForm from "./components/EventFormPage/CreateForm";
import PackageCard from "./components/EventFormPage/PackageCard";
// import ButtonCreate from './components/EventFormPage/ButtonSubmit'
import DescriptionCard from "./components/DescriptionPage/DescriptionCard";

class App extends React.Component {
	state = {
		data: null
	};

	componentDidMount() {
		// Call our fetch function below once the component mounts
		this.callBackendAPI()
			.then(res => this.setState({ data: res.express }))
			.catch(err => console.log(err));
	}
	// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
	callBackendAPI = async () => {
		const response = await fetch("/express_backend");
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};

	render() {
		return (
			<div className="App">
				{/* <HomePage />   */}

				<NavBar />

				<MainTitle />
				<LogInForm />
				<ButtonCreate />
				<OptionsTitle />
				<OptionsCard />
				<ButtonSubmit />
				<MyConcertsCard />
				<MyConcertsTitle />
				<CreateTitle />
				<CreateForm />
				<PackageCard />
				<DescriptionCard />
			</div>
		);
	}
}

export default App;
