var box = document.getElementById("message");
var counterTweets = 0;
var button = document.getElementById("buttonTwittar");

box.addEventListener('input', boxHeight);


function twittar() {
	var message = document.getElementById("message").value;

	var display = document.querySelector("#twitters");
	var div = document.createElement("div");
	div.setAttribute("class", "post");
	div.innerHTML = message;
	display.appendChild(div);
	hour();
	box.value = "";
	counterTweets = counterTweets + 1;
	document.getElementById("counterTweets").innerHTML = counterTweets;
	document.getElementById('counterMessage').style.color = "#000000";

	function hour() {
		var p = document.createElement("p");
		hour = Date();
		p.setAttribute("class", "postDate");
		p.innerHTML = hour;
		div.appendChild(p);
	}

	if (!document.getElementById('buttonTwittar').disabled)
		document.getElementById('buttonTwittar').disabled = true;
	button.removeAttribute("class", "buttonAble");
	document.getElementById('counterMessage').innerHTML = 140;
	event.preventDefault();
}

function ableBtn() {
	var message = document.getElementById("message").value;
	if (message.length >= 1) {
		if (document.getElementById('buttonTwittar').disabled) document.getElementById('buttonTwittar').disabled = false;
		button.setAttribute("class", "buttonAble");
	}
	if (message.length == "" || !message.trim()) {
		document.getElementById('buttonTwittar').disabled = true;
		button.removeAttribute("class", "buttonAble");
		document.getElementById('counterMessage').innerHTML = 140;

	}
}

function caracter() {
	var valor = document.getElementById('message').value;
	var counterCaracter = valor.length;
	var caracter = document.getElementById('counterMessage').innerHTML = 140 - counterCaracter;
	if (caracter <= 0) {
		document.getElementById('buttonTwittar').disabled = true;
		button.removeAttribute("class", "buttonAble");
		document.getElementById('counterMessage').style.color = "#ff0000";
	}
	if (caracter > 0 && caracter <= 10) {
		document.getElementById('counterMessage').style.color = "#ffa100";
	}
	if (caracter >= 11 && caracter <= 20) {
		document.getElementById('counterMessage').style.color = "#1da1f2";
	}

	if (caracter >= 21) {
		document.getElementById('counterMessage').style.color = "#000000";
	}
}

function boxHeight() {
	if (box.scrollHeight > box.offsetHeight) {
		box.rows += 1;
	}
}
