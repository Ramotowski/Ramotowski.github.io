var enFlag = document.getElementById("englishFlag");
var plFlag = document.getElementById("polishFlag");
var mainText = document.querySelector("span");
var  author= document.querySelector("footer");

enFlag.addEventListener("click", function(){
	mainText.textContent="Attractions of Olsztyn";
	author.textContent="Author: Mateusz Ramotowski";
	});

plFlag.addEventListener("click", function(){
	mainText.textContent="Atrakcje Olsztyna";
	author.textContent="Autor: Mateusz Ramotowski";
	});

