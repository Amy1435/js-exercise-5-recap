// Non siete obbligati a stampare i risultati del documento. Consideratelo un BONUS su ogni esercizio
// 1. Crea una funzione che crea la versione girata di una parola.
//Chiedi all'utente una parola e mostra la versione girata della parola.

let wordFlip = prompt("Quale parola vuoi girare?");
function wordTurnedMachine(word) {
    let wordContainer = "";
    for (let i = 0; i < word.length + 1; i++) {
        console.log("START LOOOP");
        console.log(wordContainer);

        console.log("i :" + i);
        console.log("word.length " + word.length);
        console.log(word.length - 1);

        let lastLetter = word.charAt(word.length - i);
        console.log(lastLetter);
        wordContainer += lastLetter;
        console.log("ENMD LOOOP");
    }
    return wordContainer;
}

let risultato = wordTurnedMachine(wordFlip);
console.log(risultato);
