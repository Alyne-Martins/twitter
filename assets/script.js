var clean = document.getElementById("message");

function twittar() {

	var message = document.getElementById("message").value;
	var exibir = document.querySelector("#twitters");
	var div = document.createElement("div");
	div.setAttribute("class", "post");
	div.innerHTML = message;
	exibir.appendChild(div);
	event.preventDefault();
	clean.value = "";
}
