const lists = document.getElementById("list");

document.getElementById("add").addEventListener("click", () => {
	const task = document.getElementById("task").value;

	if (task != "")
	{
		const item = document.createElement("li");
		item.innerText = task;
		const del = document.createElement("button");
		del.innerText = "Done"
		del.classList.add("deleteTask");
		del.addEventListener("click", function() {
			item.remove();
		});
		item.appendChild(del)
		lists.appendChild(item)
		document.getElementById("task").value = "";
	}
});