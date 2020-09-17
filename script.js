var zivotinje = ["tigar", "macka", "madjed", "ptica"];
var dugme = document.getElementById("blabla");
var spisak = document.getElementById("spisak");
var i = 1;

console.log("Ovo je najjaci sajt na svetu");


function dodaj() {

	var adresa = document.createElement("a");
	adresa.href = "/";
	adresa.onclick = obrisi;
	var hajedan = document.createElement("h1");
	hajedan.appendChild(document.createTextNode("Stavka " + i.toString()));
	adresa.appendChild(hajedan);
	spisak.appendChild(adresa);

	i++;
}

function obrisi(event) {
	event.target.remove();
}