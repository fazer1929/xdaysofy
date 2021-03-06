const express = require("express");
const app = express();
const fb = require("./firebase");
const userRouter = require("./userRoutes");
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRouter);
app.get("/", function (req, res) {
	res.render("pages/home");
});

//Middleware to detect user
const checkLogin = (req, res, next) => {
	var user = fb.auth().currentUser;

	if (user) {
		next();
	} else {
		// No user is signed in.
		res.redirect("user/login");
	}
};
app.get("/create", checkLogin, function (req, res) {
	res.render("pages/create");
});

app.post("/create", (req, res) => {
	const { x, y, links, time, date, media } = req.body;

	console.log(x, y, links);
});

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
