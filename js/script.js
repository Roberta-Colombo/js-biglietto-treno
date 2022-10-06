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

let prezzoMinorenni = (prezzoTotale * 20) / 100;
console.log(prezzoMinorenni);

let prezzoOver65 = (prezzoTotale * 40) / 100;
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

let prezzoUmano = prezzoTotale.toFixed(2); 

const pPrezzoFinale = document.getElementById("prezzo-finale");
pPrezzoFinale.innerText = prezzoUmano;

// EXTRA per STAMPA BIGLIETTO

const from = prompt("Da quale città parti?");
console.log(from);

const to = prompt("Qual è la città di arrivo?");
console.log(to);

const bigliettoFrom = document.getElementById("from");
bigliettoFrom.innerText = from;

const bigliettoTo = document.getElementById("to");
bigliettoTo.innerText = to;

const bigliettoMinori = document.getElementById("sconto-minori");

const bigliettoOver65 = document.getElementById("sconto-over65");

const bigliettoPrezzoPieno = document.getElementById("prezzo-pieno");

if(eta < 18){
    bigliettoMinori.innerText = "Sconto del 20%";
} else if (eta > 65){
    bigliettoOver65.innerText = "Sconto del 40%";
} else {
    bigliettoPrezzoPieno.innerText = "Prezzo pieno";
}

