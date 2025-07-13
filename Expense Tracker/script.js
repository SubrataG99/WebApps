const add = document.querySelector(".add");
const expList = document.querySelector(".expenseList");
const total = document.querySelector(".total h3");

let expenses = [];
let totalEx = 0;

function renderExpenses()
{
	let html = "";
	expenses.forEach(expense => {
		html += `
		<div class="expenseItem">
		<div class="expenseItemDescr">${expense.description}</div>
		<div class="expenseItemAmt">${expense.amount}</div>
		<button class="delExp">&times;</button>
		</div>
		`;
	});
	expList.innerHTML = html;
	total.innerText = `Total spent: INR ${totalEx}`;
}

function addExpenses()
{
	const desc = prompt("Enter expense item name");
	const amt = parseFloat(prompt("Enter amount:"));
	if (desc && amt)
	{
		const expense = {
			description:desc,
			amount:amt
		};
		expenses.push(expense);
		totalEx += amt;
		renderExpenses();
	}
}

add.addEventListener("click", addExpenses);

function delExpenses(index)
{
	totalEx -= expenses[index].amount;
	expenses.splice(index, 1);
	renderExpenses();
}

expList.addEventListener("click", function(event){
	if (event.target.classList.contains("delExp"))
	{
		const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
		delExpenses(index);
	}
});