const inputs = document.querySelectorAll("input");
const pass = inputs[1];
const passConfirm = inputs[2];

let currentPass;

pass.addEventListener("change", function () {
	currentPass = pass.value;
	passConfirm.setAttribute("pattern", currentPass);
});
