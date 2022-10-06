/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Il biglietto andrà stampato in pagina! :zwinkern: Ma controllate prima che tutto il codice funzioni !!!! */

/* ALGORITMO:
chiedere numero km da percorrere;
chiedere età passeggero;
calcolare prezzo totale:
0.21 x km
SE età<18 
    prezzo - 20%;
SE età>65 
    prezzo - 40%; 

output prezzo trasformato con max. due decimali. */

const km = prompt("Quanti km devi percorrere?");

const eta = prompt("Qual è la tua età?");

console.log(km);
console.log(eta);

let prezzoTotale = 0.21 * km;
console.log(prezzoTotale);

const prezzoMinorenni = (prezzoTotale * 20) / 100;
console.log(prezzoMinorenni);

const prezzoOver65 = (prezzoTotale * 40) / 100;
console.log(prezzoOver65);

if(eta < 18){
    prezzoTotale = prezzoMinorenni;
    console.log("Sconto del 20%");
} else if (eta > 65){
    prezzoTotale = prezzoOver65;
    console.log("Sconto over 65");
} else {
    prezzoTotale;
    console.log("Prezzo pieno");
}

const pPrezzoFinale = document.getElementById("prezzo-finale");
pPrezzoFinale.innerText = prezzoTotale;


