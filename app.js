const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
	res.render("pages/home");
});

app.get("/create", function (req, res) {
	res.render("pages/create");
});

app.post("/create", (req, res) => {
	const { x, y, links, time, date, media } = req.body;

	console.log(x, y, links);
});

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
