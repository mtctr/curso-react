import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
class App extends React.Component {
	onSearchSubmit(term) {
		axios.get("https://api.unsplash.com/search/photos", {
			params: {
				query: term
			},
			headers: {
				Authorization:
					"Client-ID 05fd39bbcbc08d11a94988de16d861a6e4f227c46d6ebf26cd5ca0677955d73b"
			}
		});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
