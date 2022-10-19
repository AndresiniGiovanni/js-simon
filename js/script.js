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
let risultato = document.getElementById("risultato");
let ArrayRandom = [];
let arrayUser = [];
let numeroDiNumeri = 5;

//mi metto 5 numeri dentro una variabile;
//uso un ciclo while per generare i 5 numeri e popolare l'array;
//finché numeri.length < 5 continua a girare;
// genero un numero random dentro al while ;
//
//prendo il div dall'html e assegno una variabile;
while (ArrayRandom.length < numeroDiNumeri) {
  let numero = randomNumber(1, 100);
  if (!ArrayRandom.includes(numero)) {
    //controllo numeri.includes. if not numeri.includes
    ArrayRandom.push(numero); //allora numeripush
  }
}
divNum.innerText = ArrayRandom;

//chiedere i numeri all'utente
//inserisco un input type text nell'hmtl

//dopo 5 volte dico quanti numeri ha indovinato

function clear() {
  divNum.innerText = "";
}

setTimeout(clear, 3000); // function setTimeout di 3 secondi /3000ms/ function nascondere i numeri dopo 3 sec

function inserisci() {
  arrayUser.push(numeriutente);
  let valore = parseInt(arrayUser.value);
  arrayUser.push(valore);
  console.log(arrayUser);
  arrayUser.value = "";
}

//funzione che controlla i numeri inseriti dall'utente
function controllo() {
  let win;
  for (let i = 0; i < numeroDiNumeri; i++) {
    if (arrayUser[i] !== ArrayRandom[i]) {
      win = false;
      risultato.innerText = `hai perso`;
    } else {
      win = true;
      risultato.innerText = `hai vinto`;
    }
    console.log(win);
  }
}

console.log(ArrayRandom);
console.log(numeriutente);
console.log(arrayUser);
button.addEventListener("click", controllo);
