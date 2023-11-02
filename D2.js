/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

  /* const numero1 = parseInt(prompt("inserisci un numero"))
   const numero2 = parseInt(prompt("inserisci un numero"))

   let vincitore

   if(numero1 > numero2) {
    vincitore = numero1
  }
   else {
   vincitore = numero2
  }
   alert (`il numero più grande è ${vincitore}`)
   console.log(vincitore)
  */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/*const numeroParagone = 5
const numeroInserito = parseInt(prompt("inserisci un numero"))
if (numeroInserito!== numeroParagone) {
  console.log("not equal")
}
else {
  console.log("equal")
}
*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*let numero = parseInt(prompt("inserisci un numero"))

if (numero % 5 === 0) {
    console.log("divisibile per 5")
}
else {
  console.log("la divisione da resto")
}
*/

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/*let numero1 = parseInt(prompt("inserisci il primo numero"))
let numero2 = parseInt(prompt("inserisci il secondo numero"))
let numeroBase = 8
if (numero1 == numeroBase || numero2 == numeroBase){
  console.log(`uno dei due numeri è ${numeroBase}`)
}
else if (numero1 - numero2 == numeroBase) {
  console.log(`${numero1} - ${numero2} = ${numeroBase}`)
}
else if (numero2 - numero1 == numeroBase){
  console.log(`${numero2} - ${numero1} = ${numeroBase}`)
}
else if (numero1 + numero2 == numeroBase){
console.log(`${numero1} + ${numero2} = ${numeroBase}`)
}
else {
  console.log(`Il risultato non può essere ${numeroBase} e nessuno dei due numeri inseriti è ${numeroBase}`)
}
*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* const spedizione = 10
let totalShoppingCart = parseInt(prompt("Carrello"))

if (totalShoppingCart > 50) {
    spedizione = 0
    console.log(`Il totale da addebitare all'utente è ${totalShoppingCart}€ (Spedizione gratuita).`)
}

else {
  console.log(`Il totale da addebitare all'utente è ${totalShoppingCart}€ (Costo di spedizione: ${spedizione}€).`)
} */


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* const spedizione = 10
const sconto = 0.8
let totalShoppingCart = parseInt(prompt("Carrello"))
let totaleBlackF = totalShoppingCart * sconto

if (totaleBlackF > 50) {
    console.log(`Il totale da addebitare all'utente è ${totaleBlackF}€ (Spedizione gratuita).`)
}

else {
  console.log(`Il totale da addebitare all'utente è ${totaleBlackF}€ (Costo di spedizione: ${spedizione}€).`)
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/*let pippo = 8
let topolino = 5
let paperino = 2
let insiemeDiNumeri = [pippo = 8, topolino = 5, paperino =2]
insiemeDiNumeri.sort()
console.log(insiemeDiNumeri)
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* const userInput = prompt("Scrivi qui:")
function isNumber (value){
  return !isNaN(value) && isFinite(value);
}
if (isNumber(userInput)) {
  console.log(`${userInput} è un numero.`);
} else {
  console.log(`${userInput} non è un numero.`);
} */
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*const numero = parseInt(prompt("Scrivi un numero"))

if (numero % 2 == 0) {
  alert("numero pari!")
}
else{
  alert("numero dispari!")
}
*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */

  /*let val = 7
  if (val < 5) {
    console.log("Meno di 5");
  } else if (val < 10) {
    console.log("Meno di 10");
  } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
  
me['city'] = "Toronto"
*/


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/*delete me['lastName']
/*
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*me.skills.pop()
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/*let myArray = []
for(let i = 1; i <= 10; i ++)
myArray.push(i)
*/
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/*let lastNumber = myArray.indexOf(10);
if (lastNumber !== -1) {
    myArray[lastNumber] = 100;
}
*/