// Objectif : Générer une structure d'arborescence avec des valeurs récursives.
// Indication : Il existe une méthode pour faire des appels récursifs dans fast-check
type Tree = { value: number; children: Tree[] };

const createTree = (value: number): Tree => ({ value, children: [] });
