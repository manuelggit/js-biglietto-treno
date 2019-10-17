// ll programma dovrà chiedere all’utente il numero di chilometri
// e l’età
// e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni
// e del 40% per gli over 65

var distanza, eta, prezzo, coeff

// chiedo all'utente quanti km vuole percorrere

distanza = prompt('Inserisci il numero di km che vuoi percorrere (scrivi solo numeri)');

// chiedo all'utente quanti anni ha

eta = parseInt(prompt('Quanti anni hai? (scrivi solo numeri)'));

coeff = 0.6

prezzo = distanza * 0.21 * coeff

if (eta < 18) {
  document.getElementById('prezzobiglietto').innerHTML = 'Il tuo biglietto costerà solo ' + prezzo * coeff + ' €'
}

// definisco il prezzo del biglietto in base ai km

// document.getElementById('prezzobiglietto').innerHTML = 'Il tuo biglietto costerà solo ' + distanza * 0.21 + ' €'
// console.log(prezzo)

// applico lo sconto, se c'è, in base all'età
