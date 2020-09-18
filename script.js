var zivotinje = ["tigar", "macka", "madjed", "ptica"];
var dugme = document.getElementById("blabla");
var spisak = document.getElementById("spisak");
var i = 1;

console.log("Ovo je najjaci sajt na svetu");


function dodaj() {

	var hajedan = document.createElement("h1");
	hajedan.onclick = obrisi;
	hajedan.classList.add("nedodirljiv");
	hajedan.appendChild(document.createTextNode("Stavka " + i.toString()));
	spisak.appendChild(hajedan);

	i++;
}

function obrisi(event) {
	event.target.remove();
}