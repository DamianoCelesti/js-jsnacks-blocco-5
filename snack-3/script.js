const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


//quando devo trasformare ogni elemento di un array in un altro array in rapporto 1 a 1 uso map
// const numeriInc = numbers.map(function(numero) {
//     return numero + 1
// });
// console.log(numeriInc);

// prendo ogni elemento dell'array originale e mapparlo/trasformarlo in un nuovo array
const numeriInc = numbers.map((numero) =>
    numero + 1
);
console.log(numeriInc);