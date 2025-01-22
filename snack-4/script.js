const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']


// const nomiAutori = posts.map(function(autore) {
//   return autore.author
// });

// console.log(nomiAutori);

// prendo ogni elemento dell'array originale e mapparlo/trasformarlo in un nuovo array
const nomiAutori = posts.map((autore) =>
  //prendiamo solo la proprietà che ci interessa
  autore.author
);

console.log(nomiAutori);
