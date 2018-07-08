var clean = document.getElementById("message");
var counterTweets = 0;
var button = document.getElementById("buttonTwittar");


function twittar() {
	var message = document.getElementById("message").value;

	var exibir = document.querySelector("#twitters");
	var div = document.createElement("div");
	div.setAttribute("class", "post");
	div.innerHTML = message;
	exibir.appendChild(div);
	event.preventDefault();
	clean.value = "";
	counterTweets = counterTweets + 1;
	document.getElementById("counterTweets").innerHTML = counterTweets;
	if (!document.getElementById('buttonTwittar').disabled)
		document.getElementById('buttonTwittar').disabled = true;
	button.removeAttribute("class", "buttonAble");

	document.getElementById('counterMessage').innerHTML = 140;
}

function ableBtn() {
	var valor = document.getElementById('message').value;
	var counterCaracter = valor.length;
	document.getElementById('counterMessage').innerHTML = 140 - counterCaracter;
	var message = document.getElementById("message").value;

	if (message.length >= 1) {
		if (document.getElementById('buttonTwittar').disabled) document.getElementById('buttonTwittar').disabled = false;
		button.setAttribute("class", "buttonAble");
	}

}
