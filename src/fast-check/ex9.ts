// => Test de génération de tableaux uniques

// Objectif : Tester qu'un tableau généré contient uniquement des éléments uniques.

const uniqueArray = (arr: number[]): number[] => Array.from(new Set(arr));
