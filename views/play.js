var pictures=[
	"zeus.jpg",
	"poseidone.jpg",
	"apollo.jpg",
	"bacco.jpg",
	"efesto.jpg",
	"hera.jpg",
	"atena.jpg",
	"demetra.jpg",
	"afrodite.jpg",
	"artemide.jpg",
	"hermes.jpg",
	"ares.jpg",
];

function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "" id="god" class="border border dark mx-auto d-block rounded-circle w-20" class="img-fluid" >';
    document.write(imgStr); document.close();
    return num;
}

function rAns(){
	alert("Risposta corretta!");
}

function wAns(){
	alert("Risposta errata!");
}

function getRndName(num, value2=-1) {
	var p= pictures;
	delete p[num];
	if(value2>=0){
		if(value2>num){
			delete p[value2-1];
		}
		else if(value2<num){
			delete p[value2];
		}
		
	}
	do{
		var r= Math.floor(Math.random()*p.length);
	}
	while (p[r]===undefined);
	getGodName(r);
	return r;
}

function getGodName(num) {
	var name="zeus";
	switch (num){
	case 0:
		name="Zeus";
		break;
	case 1:
		name="Poseidone";
		break;
	case 2:
		name="Apollo";
		break;
	case 3:
		name="Dioniso";
		break;
	case 4:
		name="Efesto";
		break;
	case 5:
		name="Hera";
		break;
	case 6:
		name="Atena";
		break;
	case 7:
		name="Demetra";
		break;
	case 8:
		name="Afrodite";
		break;
	case 9:
		name="Artemide";
		break;
	case 10:
		name="Hermes";
		break;
	case 11:
		name="Ares";
		break;
	}
	document.write(name);  document.close();
}
