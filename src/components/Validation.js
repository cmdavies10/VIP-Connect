import React from "react";

function Validate(props) {
	return (
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
			<div>
				<a href="/auth/google">Sign In with Google</a>
			</div>
		</form>
	);
}

export default Validate;
