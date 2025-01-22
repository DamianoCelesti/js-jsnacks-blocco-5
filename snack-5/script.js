const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//quando da un array devo prendere soltanto alcuni elementi uso filter
// const numeriPari = nums.filter(function(pari) {
//     return pari % 2 == 0
// });

// console.log(numeriPari);

// applico la funzione filter e di tutto l'array prendiamo solo gli elementi che sono veri(che rispettano la condizione)
const numeriPari = nums.filter((pari) =>
    //condizione per vedere se sono veri
    pari % 2 == 0
);

console.log(numeriPari);
