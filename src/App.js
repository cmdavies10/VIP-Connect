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
