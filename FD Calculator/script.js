function calculateFD()
{
	// For taking the inputs
	const p = parseFloat(document.getElementById('principle').value);
	const r = parseFloat(document.getElementById('rate').value);
	const t = parseFloat(document.getElementById('time').value);
	// For Calculation
	const fd = p + (p*r*t)/100 ;
	// For displaying the results
	document.getElementById('result').innerText = `Final Amount : INR ${fd.toFixed(2)}`;
}

// To call the function using the button
document.getElementById('calculate').addEventListener('click', calculateFD);