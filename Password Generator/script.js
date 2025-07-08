// Fetch the inputs from the forms
const lowCase = "abcdefghijklmnopqrstuvwxyz";
const upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const num = "0123456789";
const sym = "!@#$%^&*()_+-=[]{}|,./<>?";

const len = document.getElementById("len");
const lc = document.getElementById("lowCase");
const uc = document.getElementById("upCase");
const n = document.getElementById("includeNum");
const sc = document.getElementById("specialChar");
const gen = document.getElementById("genPass");
const password = document.getElementById("password");

gen.addEventListener("click", function()
{
	const l = len.value;
	let char = "";
	let pass = "";
	if (lc.checked)	{ char += lowCase; }
	if (uc.checked) { char += upCase; }
	if (n.checked) { char += num; }
	if (sc.checked) { char += sym; }
	for(let i = 0; i < l; i++)
	{
		pass += char.charAt(Math.floor(Math.random() * char.length));
	}
	password.value = pass;
});