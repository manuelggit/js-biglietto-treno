// ll programma dovrà chiedere all’utente il numero di chilometri
// e l’età
// e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni
// e del 40% per gli over 65

var distanza, eta, prezzo

// chiedo all'utente quanti km vuole percorrere

distanza = prompt('Inserisci il numero di km che vuoi percorrere (scrivi solo numeri)');

console.log(distanza)

// chiedo all'utente quanti anni ha

eta = parseInt(prompt('Quanti anni hai? (scrivi solo numeri)'));

console.log(eta)

// applico lo sconto, se c'è, in base all'età

prezzo = distanza * 0.21

if (eta < 18) {
  document.getElementById('prezzobiglietto').innerHTML = 'Il tuo biglietto costerà solo ' + prezzo * 0.8 + ' €'
} else if (eta >= 65){
  document.getElementById('prezzobiglietto').innerHTML = 'Il tuo biglietto costerà solo ' + prezzo * 0.6 + ' €'
} else {
  document.getElementById('prezzobiglietto').innerHTML = 'Il tuo biglietto costerà solo ' + prezzo + ' €'
}

console.log(eta < 18)
console.log(0.21 * distanza * 0.8)
console.log(eta >= 65)
console.log(0.21 * distanza * 0.6)
console.log(0.21 * distanza)
