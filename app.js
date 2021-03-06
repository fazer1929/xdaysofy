const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
	res.render("pages/home");
});
app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}`));
