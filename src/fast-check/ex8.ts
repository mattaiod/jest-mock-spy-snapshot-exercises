// => Génération de données aléatoires dans un intervalle
// Objectif : Tester que des nombres générés dans l'intervalle [min, max] respectent cette contrainte.

const randomInRange = (min: number, max: number): number =>
  Math.random() * (max - min) + min;
