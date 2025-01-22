const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'


// const classeStudente = students.find(function(studente) {
//   return studente.name === "Marco Lanci"
// });

// console.log(classeStudente.class);



//prelevo l'intero oggetto che rispetti la condizione su una sola proprietà
const classeStudente = students.find((studente) =>
  studente.name === "Marco Lanci"
);

// ma faccio restituire un'altra proprietà dell'oggetto trovato
console.log(classeStudente.class);