//Objectif : Générer des objets et vérifier que les propriétés id sont toujours des nombres (quand on fournit un nombre) et que les noms ont une longueur minimale de 3 caractères (quand on fournit une longueur de 3 chars min)

// Fonction de création d'un objet utilisateur
const createUser = (id: number, name: string) => ({ id, name });
