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
// function concatena(stringhe) {
//     let contenitore = "";
//     let numeroStringhe = Number(prompt("quante stringhe vuoi concaterare?"));
//     for (i = 0; i < numeroStringhe; i++) {
//         let stringa = prompt("scivi la stringa che vuoi concatenare");
//         contenitore += stringa + " ";
//     }
//     return contenitore;
// }

// console.log(concatena());

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

// 4. Crea una funzione che transforma una stringa in maiuscolo o minuscolo in base ad un parametro.
//Quindi, crea un array che contiene tutte le lettere dell'alfabeto,
// ciascuna randomicamente maiuscola o minuscola.
// Consiglio: potete creare la stringa 'abcdefghijklmnopqrstuvz' e con un ciclo for controllare ogni carattere della stringa, ovvero ogni lettera dell'alfabeto.

// function alfabetoBizzarro() {
//     let alfabeto = "abcdefghijklmnopqrstuvz";
//     let alfabetoStrano = "";
//     for (let i = 0; i < alfabeto.length; i++) {
//         let random = Math.floor(Math.random() * 26);
//         console.log(random);
//         let lettere = alfabeto[i];
//         console.log(lettere);
//         if (random % 2 === 0) {
//             alfabetoStrano += lettere.toUpperCase();
//         } else {
//             alfabetoStrano += lettere.toLowerCase();
//         }
//     }
//     return alfabetoStrano;
// }

// console.log(alfabetoBizzarro());

// 5. Crea una funzione che esegue il lancio di una moneta (ritorna testa o croce, casualmente).
//Quindi, chiedi all'utente quanti lanci vuole effettuare e se punta su testa o croce.
// Se la maggioranza dei lanci sono uguali a ciò che ha puntato l'utente, mostragli che ha vinto.
//Altrimenti, mostragli che ha perso.

function lancioMoneta() {
    let random = Math.floor(Math.random() * 100);
    if (random % 2 === 0) {
        return "testa";
    } else {
        return "croce";
    }
}

function scommessa() {
    let sceltaUtente = prompt("scegli testa o croce?");
    let qntLanci = Number(prompt("quanti lanci vuoi fare?"));
    let risultato = [];
    for (let i = 0; i < qntLanci; i++) {
        let nuovorisultato = lancioMoneta();

        risultato.push(nuovorisultato);
    }

    let risposteCorrette = 0;
    for (let i = 0; i < risultato.length; i++) {
        if (sceltaUtente === risultato[i]) {
            risposteCorrette++;
        }
    }
    console.log(
        "Questo è il numero delle tue risposte corrette : " + risposteCorrette
    );

    if (risposteCorrette > risultato.length / 2) {
        console.log(`Hai vinto`);
    } else {
        console.log("you lose");
    }
    return risultato;
}

// console.log(scommessa());

// 6. Crea una funzione che genera il lancio di un dado a 6 facce (ritorna un numero casuale tra 1 e 6).
//Quindi simula un lancio per il computer e un lancio per l'utente.
//Mostra all'utente quanto è stato il risultato del computer e quanto è stato il risultato dell'utente e comunicagli se ha vinto o meno.

function dado(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function giocoDadi() {
    let lanciUtente = dado(1, 6);
    console.log(" Questo è il tuo lancio: " + lanciUtente);
    let lancioComputer = dado(1, 6);
    console.log(" Questo è il lancio del computer: " + lancioComputer);

    if (lanciUtente > lancioComputer) {
        alert("Hai vinto! il tuo numero è superiore a quello del computer");
    } else {
        alert("Hai perso :(  il tuo numero è inferiore a quello del computer");
    }
}

//UNDEFINED

// 7. Crea una funzione che simula un lancio della roulette (deve ritornare un numero casuale tra 0 e 36).
// Quindi chiedi all'utente se vuole puntare su un numero o su pari/dispari.
// Quindi esegui un lancio della roulette e fagli sapere se ha vinto.

function lancioRoulette() {
    return Math.floor(Math.random() * 36);
}

function giocoRoulette() {
    let domPuntare = prompt("Vuoi puntare su un numero o su pari/dispari?");
    let sceltaUtente = "";
    if (domPuntare === "numero") {
        sceltaUtente += Number(prompt("su che numero vuoi puntare ?"));
    } else if (domPuntare === "pari/dispari") {
        sceltaUtente += prompt("scegli se pari o dispari?");
    }

    console.log("la tua scelta è " + sceltaUtente);

    let risultato = lancioRoulette();

    console.log("questo è il numero della roulette " + risultato);

    // console.log("sceltaUtente " + sceltaUtente);
    // console.log("risultato " + risultato);
    // console.log(sceltaUtente === risultato);
    // console.log(sceltaUtente === "pari" && risultato % 2 === 0);
    // console.log(sceltaUtente === "dispari" && risultato % 2 !== 0);

    if (
        (sceltaUtente === Number && sceltaUtente === risultato) ||
        (sceltaUtente === "pari" && risultato % 2 === 0) ||
        (sceltaUtente === "dispari" && risultato % 2 !== 0)
    ) {
        console.log("congratulation you won");
    } else {
        console.log("you lost =(");
    }
}

// 8. Il casinò:
// Chiedi all'utente a quale gioco vuole giocare tra lancio della moneta, lancio dei dadi e roulette.
//Quindi esegui una delle funzioni che avevi già preparato per i precedenti esercizi.

function giochi() {
    let sceltaGioco = prompt(
        "A quale gioco vuoi giocare tra lancio della moneta, lancio dei dadi e roulette?"
    );
    if (sceltaGioco === "lancio della moneta") {
        return scommessa();
    } else if (sceltaGioco === "lancio dei dadi") {
        return giocoDadi();
    } else if (sceltaGioco === "roulette") {
        return giocoRoulette();
    }
}

giochi();

// 9. Crea una lista di animali (stringhe) che fanno parte dello Zoo.
//Crea una funzione che a partire da una stringa, ci fa sapere se nello zoo c'è quell'animale.
//Chiedi all'utente quale animale vuole vedere. Comunicagli, usando la funzione, se l'animale c'è o meno.
// BONUS: la funzione deve funzionare anche se l'utente scrive il nome tutto maiuscolo/tutto maiuscolo/un mix. Ci interessa solo che il nome dell'animale sia lo stesso.

// const animalZoo = [
//     "ippopotamo",
//     "giraffa",
//     "cammello",
//     "scimmia",
//     "bradipo",
//     "koala",
//     "leone",
// ];

// function animalResearch() {
//     let animalWanter = prompt("che animale vuoi vedere allo zoo?");

//     if (animalZoo.includes(animalWanter) === true) {
//         return `C'é il ${animalWanter} nel nostro zoo, vieni a trovarci!`;
//     } else {
//         return `Pultroppo non lo abbiamo il ${animalWanter} nel nostro zoo`;
//     }
// }

// console.log(animalResearch());

// 10. Crea una funzione che ordina una lista di numeri dal più piccolo al più grande.
//Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri.
//Mostra all'utente la lista di numeri ordinata dal più piccolo al più grande.

// function ordineNumeri() {
//     let domQuantiNumeri = Number(prompt("quanti numeri vuoi inserire?"));
//     let numeriUtente = [];
//     for (i = 0; i < domQuantiNumeri; i++) {
//         let numeri = Number(prompt("Scivi il numero che vuoi inserire:"));
//         numeriUtente.push(numeri);
//     }
//     console.log("Questi sono i tuoi numeri " + numeriUtente);

//     function comparazioneNumeri(a, b) {
//         return a - b;
//     }

//     function piccoloGrande() {
//         let numeriCrescenti = numeriUtente.sort(comparazioneNumeri);
//         return "Ecco la lista crescente dei tuoi numeri " + numeriCrescenti;
//     }
//     console.log(piccoloGrande());
// }

// ordineNumeri();

// 11. Crea una funzione che ordina una lista di numeri. In base a uno dei parametri,
// viene ordinata dal più piccolo al più grande o viceversa.
//Chiedi all'utente quanti numeri vuole inserire. Quindi, chiedi all'utente i numeri.
//Infine, chiedi all'utente se li vuole visualizzare in ordine crescente o decrescente.
//Mostra all'utente la lista di numeri ordinata nel modo in cui ha chiesto.

// function ordineNumeri() {
//     let domQuantiNumeri = Number(prompt("quanti numeri vuoi inserire?"));
//     let numeriUtente = [];
//     for (i = 0; i < domQuantiNumeri; i++) {
//         let numeri = Number(prompt("Scivi il numero che vuoi inserire:"));
//         numeriUtente.push(numeri);
//     }
//     console.log("Questi sono i tuoi numeri " + numeriUtente);

//     sceltaOrdine(numeriUtente);
// }

// function comparazioneNumeriCrescenti(a, b) {
//     return a - b;
// }

// function crescente(numeriUtente) {
//     numeriUtente.sort(comparazioneNumeriCrescenti);
//     console.log("Ecco la lista crescente dei tuoi numeri " + numeriUtente);
//     return "Ecco la lista crescente dei tuoi numeri " + numeriUtente;
// }

// function comparazioneNumeriDecrescenti(a, b) {
//     return b - a;
// }

// function decrescente(numeriUtente) {
//     numeriUtente.sort(comparazioneNumeriDecrescenti);
//     console.log("Ecco la lista decrescente dei tuoi numeri " + numeriUtente);
//     return "Ecco la lista decrescente dei tuoi numeri " + numeriUtente;
// }

// function sceltaOrdine(numeriUtente) {
//     let scelta = prompt(
//         "vuoi ordinare i tuo numeri in modo crescente o decrescente?"
//     );
//     if (scelta === "crescente") {
//         return crescente(numeriUtente);
//     } else if (scelta === "decrescente") {
//         return decrescente(numeriUtente);
//     }
// }

// ordineNumeri();
