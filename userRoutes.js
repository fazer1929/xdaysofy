var express = require("express");
var router = express.Router();
const fb = require("./firebase");
function signup(email, pass, userName) {
	fb.auth()
		.createUserWithEmailAndPassword(email, pass)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			console.log(user.email);
			user
				.updateProfile({
					displayName: userName,
				})

				.catch(function (error) {
					// An error happened.
					console.log(error.message);
				});
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			// ..
		});
}
function signin(email, pass) {
	fb.auth()
		.signInWithEmailAndPassword(email, pass)
		.then((userCredential) => {
			// Signed in
			var user = userCredential.user;
			// ...
		})
		.catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
		});
}

router.get("/signup", (req, res) => {
	res.render("pages/signup");
});
router.post("/signup", async (req, res) => {
	if (
		req.body.email != "" &&
		req.body.firstName != "" &&
		req.body.pass != "" &&
		req.body.lastName != ""
	) {
		if (req.body.pass === req.body.pass2) {
			signup(
				req.body.email,
				req.body.pass,
				req.body.firstName + " " + req.body.lastName,
			);
			res.redirect("login");
		}
	}
});
router.get("/login", (req, res) => {
	res.render("pages/login");
});
router.post("/login", (req, res) => {
	signin(req.body.email, req.body.pass);
	res.redirect("/");
});
module.exports = router;
