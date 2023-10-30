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
function concatena(stringhe) {
    let contenitore = "";
    let numeroStringhe = Number(prompt("quante stringhe vuoi concaterare?"));
    for (i = 0; i < numeroStringhe; i++) {
        let stringa = prompt("scivi la stringa che vuoi concatenare");
        contenitore += stringa + " ";
    }
    return contenitore;
}

console.log(concatena());

// 3. Crea una funzione che calcola il doppio di un numero. Quindi chiedi all'utente 10 numeri. Per ogni numero, mostra all'utente il doppio, usando la funzione.

// function doppioNumero(numero) {
//     let container = "";
//     for (let i = 0; i < 10; i++) {
//         let numeroUtente = Number(prompt("Chi numero vuoi raddopiare?"));
//         let numeroRaddopiato = numeroUtente * numeroUtente;
//         container += numeroRaddopiato + " ";
//     }
//     return container;
// }

// let risultato = doppioNumero();
// console.log(risultato);

// 4. Crea una funzione che transforma una stringa in maiuscolo o minuscolo in base ad un parametro. Quindi, crea un array che contiene tutte le lettere dell'alfabeto, ciascuna randomicamente maiuscola o minuscola.
// Consiglio: potete creare la stringa 'abcdefghijklmnopqrstuvz' e con un ciclo for controllare ogni carattere della stringa, ovvero ogni lettera dell'alfabeto.
