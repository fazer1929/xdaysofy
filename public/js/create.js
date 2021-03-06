const dateField = document.getElementById("date");
const timeCheck = document.getElementById("reminders");
const timeField = document.getElementById("timeContainer");
Date.prototype.toDateInputValue = function () {
	var local = new Date(this);
	local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
	return local.toJSON().slice(0, 10);
};

timeCheck.addEventListener("change", (e) => {
	timeField.classList.toggle("hide");
});
dateField.value = new Date().toDateInputValue();
