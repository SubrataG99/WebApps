function detectChar()
{
	const charInp = document.getElementById("char").value;
	const result = document.getElementById("result");
	if (charInp.charCodeAt(0) < 128)
		result.innerText = `It is ASCII character`;
	else
		result.innerText = `It is Unicode character`;
};