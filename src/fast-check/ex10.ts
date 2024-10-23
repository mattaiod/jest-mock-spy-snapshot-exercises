//Objectif : Générer des tableaux imbriqués et vérifier que la longueur totale des éléments d’un tableau après "aplatissement" correspond à la somme des longueurs des sous-tableaux.

// Fonction pour aplatir un tableau imbriqué
const flattenArray = <T>(arr: T[][]): T[] => arr.flat();
