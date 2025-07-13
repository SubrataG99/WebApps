const click = document.getElementById("click");
const pop = document.getElementById("mypopover");
const close = document.getElementById("close");

click.addEventListener("click", function(){
	pop.classList.add("active");
});

close.addEventListener("click", function() {
	pop.classList.remove("active");
});