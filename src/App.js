import Validate from "./components/Validation";
import React, { Component } from "react";

class App extends Component {
	render() {
		return (
			<div>
				<Validate>
					<form action="/login" method="post">
						<div>
							<label>Username:</label>
							<input type="text" name="username" />
						</div>
						<div>
							<label>Password:</label>
							<input type="password" name="password" />
						</div>
						<div>
							<input type="submit" value="Log In" />
						</div>
					</form>
				</Validate>
			</div>
		);
	}
}

export default App;
