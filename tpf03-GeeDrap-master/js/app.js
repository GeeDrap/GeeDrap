// Code du TPF02
var liste;

function nouvelleTransaction(){
    liste = [];
}

function commanderCafe(nom){
    liste.push(nom);
}

function lecturePremierCafe(){
    var premierCafe = liste.shift();
    return premierCafe;
}

function terminerTransaction() {
    liste = undefined;
}

var cafe1 = {

	nom : "",
	lait : 0,
	sucre : 0;
	prix : 0;
	nomPers : "";

};

var cafe2 = {

	nom : "",
	lait : 0,
	sucre : 0;
	prix : 0;
	nomPers : "";

};

var cafe3 = {

	nom : "",
	lait : 0,
	sucre : 0;
	prix : 0;
	nomPers : "";

};

var cafe4 = {

	nom : "",
	lait : 0,
	sucre : 0;
	prix : 0;
	nomPers : "";

};

var cafe5 = {

	nom : "",
	lait : 0,
	sucre : 0;
	prix : 0;
	nomPers : "";

};


console.log (cafe1,cafe2,cafe3,cafe4,cafe5);