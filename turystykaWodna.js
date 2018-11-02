var h1= document.querySelector("h1");
var paragraph=document.getElementsByClassName("paragraph");
var footer= document.querySelector("footer");
var enFlag = document.getElementById("englishFlag");
var plFlag = document.getElementById("polishFlag");

var mainTextContentPl="Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba było gorąca). wachlarz pozłocist powiewając rozlewał deszcz iskier rzęsisty. Głowa do woli nagadać nie mogą. Słońce ostat Obuchowicz Piotrowski, Obolewski, Rożycki, Janowicz, Mirzejewscy, Brochocki i sam król ją witali. Prócz Tadeusza, rzucił w nagadać nie mogą. Słońce ostat Obuchowicz Piotrowski, Obolewski, Rożycki, Janowicz, Mirzejewscy, Brochocki i sam król ją witali. Prócz Tadeusza, rzucił w"
var mainTextContentEn="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true "

plFlag.addEventListener("click", function(){
	footer.textContent="Autor: Mateusz Ramotowski";
	for(var i=0;i<paragraph.length;i++){
		paragraph[i].textContent=mainTextContentPl;	
	};	
	h1.textContent="Turystyka wodna w Olsztynie";		
	});
enFlag.addEventListener("click", function(){
	footer.textContent="Author: Mateusz Ramotowski";
	for(var i=0;i<paragraph.length;i++){
		paragraph[i].textContent=mainTextContentEn;
	};
	h1.textContent="Water tourism in Olsztyn";
	});