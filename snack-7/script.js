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

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

// quando voglio trovare il primo elemento che soddisfa una condizione in un array uso find
// const studenteDue = students.find(function(studente) {
//   return studente.id === 2
// });

// console.log(studenteDue);


//prelevo l'intero oggetto che rispetti la condizione 
const studenteDue = students.find((studente) => 
  studente.id === 2
);

console.log(studenteDue);
