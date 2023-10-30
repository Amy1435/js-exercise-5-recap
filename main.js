// Non siete obbligati a stampare i risultati del documento. Consideratelo un BONUS su ogni esercizio
// 1. Crea una funzione che crea la versione girata di una parola.
//Chiedi all'utente una parola e mostra la versione girata della parola.

// let wordFlip = prompt("Quale parola vuoi girare?");
// function wordTurnedMachine(word) {
//     let wordContainer = "";
//     for (let i = 0; i < word.length + 1; i++) {
//         console.log("START LOOOP");
//         console.log(wordContainer);

//         console.log("i :" + i);
//         console.log("word.length " + word.length);
//         console.log(word.length - 1);

//         let lastLetter = word.charAt(word.length - i);
//         console.log(lastLetter);
//         wordContainer += lastLetter;
//         console.log("ENMD LOOOP");
//     }
//     return wordContainer;
// }

// let risultato = wordTurnedMachine(wordFlip);
// console.log(risultato);

// 2. Crea una funzione che concatena una lista di stringhe. Chiedi all'utente quante stringhe vuole concatenare e poi mostragli il risultato.

// 3. Crea una funzione che calcola il doppio di un numero. Quindi chiedi all'utente 10 numeri. Per ogni numero, mostra all'utente il doppio, usando la funzione.

function doppioNumero(numero) {
    let container = "";
    for (let i = 0; i < 10; i++) {
        let numeroUtente = Number(prompt("Chi numero vuoi raddopiare?"));
        let numeroRaddopiato = numeroUtente * numeroUtente;
        container += numeroRaddopiato + " ";
    }
    return container;
}

let risultato = doppioNumero();
console.log(risultato);
