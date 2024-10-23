// => Génération d'objets
// Objectif : Vérifier que les objets générés ont toujours une clé id de type nombre et une clé name de type chaîne de caractères.

const createObject = (): { id: number; name: string } => ({
  id: Math.random(),
  name: "Test",
});
