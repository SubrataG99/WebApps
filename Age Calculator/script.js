const calcAge = () => {
	const today = new Date();
	const dob = new Date(document.getElementById("dob").value);
	const details = {
		day: dob.getDate(),
		month: dob.getMonth() + 1,
		year:dob.getFullYear(),
	};
	const currY = today.getFullYear();
	const currM = today.getMonth() + 1;
	const currD = today.getDate();

	if(isFuture(details, currY, currM, currD))
	{
		alert("You forgot to get born...");
		displayResult("-", "-", "-");
		return;
	}

	const {years, months, days} = calc(details, currY, currM, currD);
	displayResult(days, months, years);
};


// To check if the selected date is from future
const isFuture = (details, currY, currM, currD) => {
	return (
		details.year > currY || (details.year === currY && (details.month > currM || (details.month === currM) && (details.day > currD)))
	);
};

const calc = (details, currY, currM, currD) => {
	let years = currY - details.year;
	let months, days;
	if (currM < details.month)
	{
		years--;
		months = 12 - (details.month - currM);
	}
	else {
		months = currM - details.month ;
	}
	if (currD < details.day)
	{
		months--;
		const lastM = currM === 1 ? 12 : currM - 1;
		const daysInLastM = getDaysInMonth(lastM, currY);
		days = daysInLastM - (details.day - currD);
	}
	else {
		days = currD - details.day ;
	}
	return {years, months, days};
};


const getDaysInMonth = (month, year) => {
	const isLeap = year % 4 === 0 && (year % 100 != 0 || year % 400 === 0);
	const getDaysInMonth = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	return getDaysInMonth[month - 1];
};

const displayResult = (bdate, bmonth, byear) => {
	document.getElementById("years").textContent = byear;
	document.getElementById("months").textContent = bmonth;
	document.getElementById("days").textContent = bdate;
};

document.getElementById("calculate").addEventListener("click", calcAge);