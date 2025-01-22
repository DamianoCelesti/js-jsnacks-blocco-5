const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

// people.forEach(function(persona) {
//   console.log(persona.name)
// });

// itero su ogni oggetto dell'array
people.forEach((persona) =>
  //mi stampo solo la proprieta dell'oggetto che mi serve
  console.log(persona.name)
);