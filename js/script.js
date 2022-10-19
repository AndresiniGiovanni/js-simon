// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire,
// uno alla volta, i numeri che ha visto precedentemente, tramite una casella di input e un bottone
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//aggiungo tag html per visualizzare i numeri.
//creo array per accogliere i 5 numeri randomici.
//math random
//randomNumer();
let divNum = document.getElementById("numeri");
let numeriutente = document.getElementById("usernum");
let risultato = document.getElementById("risultato");
let ArrayRandom = [];
let arrayUser = [];
let numeroDiNumeri = 5;

//mi metto 5 numeri dentro una variabile;
//uso un ciclo while per generare i 5 numeri e popolare l'array;
//finché numeri.length < 5 continua a girare;
//genero un numero random dentro al while ;
//
//prendo il div dall'html e assegno una variabile;
function randomNun() {
  while (ArrayRandom.length < numeroDiNumeri) {
    let numero = randomNumber(1, 100);
    if (!ArrayRandom.includes(numero)) {
      //controllo numeri.includes. if not numeri.includes
      ArrayRandom.push(numero); //allora numeripush
    }
  }
  return ArrayRandom;
}
randomNun();
divNum.innerText = ArrayRandom;

function clear() {
  divNum.innerText = "";
}
setTimeout(clear, 3000); // function setTimeout di 3 secondi /3000ms/ function nascondere i numeri dopo 3 sec

//chiedere i numeri all'utente
//inserisco un input type text nell'hmtl
//dopo 5 volte dico quanti numeri ha indovinato
// FUNZIONE AGGIUNTA NUMERO
const buttonInvio = document.getElementById("invio"); //bottone di invio dei numeri inseriti dall'utente
const buttonVerifica = document.getElementById("control"); //bottone di  verifica
function insertNum() {
  //funzione di inserimento numeri
  let valore = parseInt(numeriutente.value);
  arrayUser.push(valore);
  console.log(arrayUser);
  numeriutente.value = "";

  if (arrayUser.length >= numeroDiNumeri) {
    buttonInvio.classList.add("d-none"); //rimozione e attivazione del bottone
    buttonVerifica.classList.remove("d-none");
  }
}
buttonInvio.addEventListener("click", insertNum);

function controllo() {
  //funzione di controllo, hai vinto o hai perso
  //ciclo for per metterli nel div stampando nell'html;
  for (let i = 0; i < ArrayRandom.length; i++) {
    if (arrayUser.includes(ArrayRandom[i])) {
      risultato.innerHTML = "corretto";
    } else {
      risultato.innerHTML = "hai sbagliato";
    }
  }
}
console.log(ArrayRandom);
buttonVerifica.addEventListener("click", controllo);
