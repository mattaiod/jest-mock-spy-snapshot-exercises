//Objectif : Générer des objets avec des propriétés imbriquées et vérifier que certaines propriétés sont toujours présentes.

const createNestedObject = (name: string, id: number) => ({
  user: { id, name },
  timestamp: Date.now(),
});
