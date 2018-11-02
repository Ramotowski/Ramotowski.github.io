var enFlag = document.getElementById("englishFlag");
var plFlag = document.getElementById("polishFlag");
var author= document.querySelector("footer");
var mainText=document.getElementsByClassName("mainText");
var photoDescription=document.getElementsByClassName("photoDescription");

var mainTextContentPl=["Litwo! Ojczyzno moja! Ty jesteś jak zdrowie. Ile cię trzeba było gorąca). wachlarz pozłocist powiewając rozlewał deszcz iskier rzęsisty. Głowa do woli nagadać nie mogą. Słońce ostat  ",
"Obuchowicz Piotrowski, Obolewski, Rożycki, Janowicz, Mirzejewscy, Brochocki i sam król ją witali. Prócz Tadeusza, rzucił w latach dojrzałą. Lecz wtenczas i gumiennym pisarzom, ochmistrzyni ",
"Ciszę przerywał ale nic to mówiąc, że teraz za duszę utęsknioną do tych pagórków leśnych, do stołu przywoławszy dwie ławy umiała się możemy na świadki pamiętam czasy, kiedy się w końcu stoła naprzód rozum od stołu. p"
];
var photoDescriptionContentPl=["Turystyka wodna",
"Zabytki",
"Szlaki turystyczne",
"Festiwale"
];
var mainTextContentEn=["But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of",
"who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure ",
"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of plh weakness of will, wh"
];
var photoDescriptionContentEn=["Water tourism",
"Relicts",
"Tourist routes",
"Festiwals"
]

plFlag.addEventListener("click", function(){
	author.textContent="Autor: Mateusz Ramotowski";
	for(var i=0;i<mainTextContentPl.length;i++){
		mainText[i].textContent=mainTextContentPl[i];
		};
	for(var i=0;i<photoDescriptionContentPl.length;i++){
		photoDescription[i].textContent=photoDescriptionContentPl[i];
		};
	});

enFlag.addEventListener("click", function(){
	author.textContent="Author: Mateusz Ramotowski";
	for(var i=0;i<mainTextContentEn.length;i++){
		mainText[i].textContent=mainTextContentEn[i];
		};
	for(var i=0;i<photoDescriptionContentEn.length;i++){
		photoDescription[i].textContent=photoDescriptionContentEn[i];
		};
	});

