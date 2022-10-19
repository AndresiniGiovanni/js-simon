
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//aggiungo tag html per visualizzare i numeri.

//creao array per accogliere i 5 numeri randomici.
//math random
//randomNumer();
let divNum = document.getElementById("numeri");
let numeriutente = document.getElementById("usernum");
let button = document.getElementById("btnEsegui");
let numeri = [];
let numeroDiNumeri = 5;
let insertNumber = [];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//mi metto 5 dentro una variabile;
//uso un ciclo while per generare i 5 numeri e popolare l'array;
//finché numeri.length < 5 continua a girare;
// genero un numero random dentro al while ;
//
//prendo il div dall'html e assegno una variabile;
//ciclo for per metterli nel div stampando nell'html;
while (numeri.length < numeroDiNumeri) {
  let numero = randomNumber(1, 100);
  if (!numeri.includes(numero)) {
    //controllo numeri.includes. if not numeri.includes ;
    numeri.push(numero); //allora numeripush
  }
}
divNum.innerText = numeri;

//chiedere i numeri all'utente
//inserisco un input type text nell'hmtl
//funzione che controlla i numeri inseriti dall'utente
//dopo 5 volte dico quanti numeri ha indovinato

function clear() {
  divNum.innerText = "";
}

setTimeout(clear, 5000);  // function setTimeout di 5 secondi /5000ms/
function insert() {
  if (insertNumber.length == numeri.length) {  //function nascondere i numeri dopo 5 sec
  } else {
    insertNumber.push(numeriutente.value);
  }
}
console.log(numeri);
button.addEventListener("click", insert);
