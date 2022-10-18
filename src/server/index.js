var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
// var AylienTextAPI = require("aylien_textapi");
const mockAPIResponse = require("./mockAPI.js");

const dotenv = require("dotenv");

dotenv.config();

// var textapi = new AylienTextAPI({
// 	application_id: process.env.API_ID,
// 	application_key: process.env.API_KEY,
// });

const app = express();

app.use(express.static("dist"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname);

app.get("/", function (req, res) {
	res.sendFile(path.resolve("dist/index.html"));
	// res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
	console.log("App listening on port 3000!");
});

app.get("/test", function (req, res) {
	res.send(mockAPIResponse);
});

app.post("/sentimentUrl", async (req, res) => {
	const { url } = req.body;

	console.log(url);

	try {
		const response = await axios.get(
			`https://api.meaningcloud.com/sentiment-2.1`,
			{
				params: {
					url,
					lang: "en",
					key: process.env.API_KEY,
				},
			}
		);

		res.status(200).json(response.data);
	} catch (error) {
		console.log(error);
	}
});
