import axios from "axios";

export default {
	checkUser: function() {
		return axios.get("/login");
	},
	getUserID: function(id) {
		return axios.get("/api/users/" + id);
	},
	deleteUser: function(id) {
		return axios.delete("/api/users/" + id);
	},
	// posts user to the database
	loginUser: function(userData) {
		return axios.post("/api/login", userData);
	},
	saveUser: function(userData) {
		return axios.post("/api/signup", userData);
	}
};
