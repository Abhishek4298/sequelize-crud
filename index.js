const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const router = require("./src/router/routes");

app.get("/", (req, res) => {
	res.json({ message: "Hello world" });
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/", router);
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin,X-Requested-With,Content-Type,Accept,Authorization"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
		return res.status(200).json({});
	}
});

app.listen(3000, () => {
	console.log("Process is listening to all incoming requests on post 3000");
});
