// ll programma dovrà chiedere all’utente il numero di chilometri
// e l’età
// e dovrà calcolare il prezzo totale del viaggio.
// Il prezzo del biglietto è definito in base ai km (0.21 €cent al km)
// ma c’è uno sconto del 20% per i minorenni
// e del 40% per gli over 65

var distanza, eta, totale, sconto, prezzo, data

// chiedo all'utente quanti km vuole percorrere

distanza = parseInt(prompt('Inserisci il numero di km che vuoi percorrere (scrivi solo numeri)'));

console.log(distanza);

// chiedo all'utente quanti anni ha

eta = parseInt(prompt('Quanti anni hai? (scrivi solo numeri)'));

console.log(eta);

// determino il prezzo pieno grazie il prezzo al km

sconto = 0;

totale = (distanza * 0.21) ;

prezzo = (distanza * 0.21) - sconto;

document.getElementById('totaledapagare').innerHTML = 'Totale da pagare: ' + totale + ' €';

console.log(totale);

// determino gli sconti in base all'età

if (eta < 18){
  sconto = (totale / 100) * 20
  document.getElementById('prezzopieno').innerHTML = 'Prezzopieno: ' + totale + ' €';
  document.getElementById('sconto').innerHTML = 'Sconto under 18 / over 65: ' + sconto + ' €';
  document.getElementById('totaledapagare').innerHTML = 'Totale da pagare: ' + (prezzo - sconto) + ' €';
  } else if (eta > 65) {
    sconto = (prezzo / 100) * 40
    document.getElementById('prezzopieno').innerHTML = 'Prezzopieno: ' + prezzo + ' €';
    document.getElementById('sconto').innerHTML = 'Sconto under 18 / over 65: ' + sconto + ' €';
    document.getElementById('totaledapagare').innerHTML = 'Totale da pagare: ' + (prezzo - sconto) + ' €';
  }

console.log(prezzo - sconto)


// genera qr-code

document.getElementById('code').innerHTML = '<img src="img/qrcode.png" alt="">';
