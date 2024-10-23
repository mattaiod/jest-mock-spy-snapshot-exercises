// => Génération de chaînes de caractères avec une longueur minimale
// Objectif : Vérifier que les chaînes générées par createUser(name) ont une longueur minimale de 5 caractères.
// Indication : Utilisez fc.string({ minLength: 5 }) pour restreindre la longueur.
const createUser = (name: string) => ({ id: Math.random(), name });
