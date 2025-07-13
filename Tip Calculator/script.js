function calculateTip()
{
	const bill = parseFloat(document.getElementById("amount").value);
	const tip = parseFloat(document.getElementById("tipPercent").value);
	const tipAmt = bill * (tip * 0.01);
	const totAmt = bill + tipAmt;

	document.getElementById("tipAmount").textContent = 'INR ' + tipAmt;
	document.getElementById("totalAmount").textContent = 'INR ' + totAmt;
}