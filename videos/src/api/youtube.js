import axios from "axios";

const KEY = "AIzaSyB-Q_R8OCkjlLMk0OSuB7DpXyDdgMGrHM0";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: `${KEY}`
	}
});
