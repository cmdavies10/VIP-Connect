
import React, { Component } from 'react';

// import Validate from "./components/Validation";

// import React from 'react';
import './App.css';
import NavBar from './components/NavBar';

import MainTitle from './components/LoginPage/MainTitle';
import LogInForm from './components/LoginPage/LogInForm';
import ButtonCreate from './components/LoginPage/ButtonCreate';
import OptionsTitle from './components/OptionsPage/OptionsTitle';
import OptionsCard from './components/OptionsPage/OptionsCard';
import ButtonSubmit from './components/OptionsPage/ButtonSubmit';
import MyConcertsCard from './components/MyConcertsPage/MyConcertsCard';
import MyConcertsTitle from './components/MyConcertsPage/MyConcertsTitle';
// import ButtonSubmit from './components/MyConcertsPage/ButtonSubmit'
import CreateTitle from './components/EventFormPage/CreateTitle';
import CreateForm from './components/EventFormPage/CreateForm';
import PackageCard from './components/EventFormPage/PackageCard';
// import ButtonCreate from './components/EventFormPage/ButtonSubmit'
import DescriptionTitle from './components/DescriptionPage/DescriptionTitle'
import DescriptionCard from './components/DescriptionPage/DescriptionCard'
import ImageCard from './components/DescriptionPage/ImageCard'
import CharityCard from './components/DescriptionPage/CharityCard'
import ButtonEdit from './components/DescriptionPage/ButtonEdit'
import ButtonBuy from './components/DescriptionPage/ButtonBuy'
import BuyTitle from './components/BuyFormPage /BuyTitle'
import BuyForm from './components/BuyFormPage /BuyForm'
import BuyDescription from './components/BuyFormPage /BuyDescription'
import TicketTitle from './components/TicketPage /TicketTitle'
import TicketDescriptionCard from './components/TicketPage /TicketDescriptionCard'
import TicketBarCode from './components/TicketPage /TicketBarCode'
import ButtonReturn from './components/TicketPage /ButtonReturn'


export default class App extends React.Component {

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

//   class App extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<Validate>
// 					<form action="/login" method="post">
// 						<div>
// 							<label>Username:</label>
// 							<input type="text" name="username" />
// 						</div>
// 						<div>
// 							<label>Password:</label>
// 							<input type="password" name="password" />
// 						</div>
// 						<div>
// 							<input type="submit" value="Log In" />
// 						</div>
// 					</form>
// 				</Validate>
// 			</div>
// 		);
// 	}
//

