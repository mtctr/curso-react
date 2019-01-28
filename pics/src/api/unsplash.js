import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization:
			"Client-ID 05fd39bbcbc08d11a94988de16d861a6e4f227c46d6ebf26cd5ca0677955d73b"
	}
});
