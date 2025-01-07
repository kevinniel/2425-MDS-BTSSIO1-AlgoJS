# Exercice : Vérification des multiples et des types

## Objectif :

Écrire un programme en JavaScript qui parcourt les nombres de 1 à 50. Pour chaque nombre, afficher dans la console :

- Si le nombre est divisible par 3, afficher : X est un multiple de 3.
- Si le nombre est divisible par 5, afficher : X est un multiple de 5.
- Si le nombre est divisible par 3 et 5, afficher : X est un multiple de 3 et 5.
- Sinon, afficher : X n'est pas un multiple de 3 ni de 5.
- Bonus : Afficher le type de la variable pour chaque nombre.

## Consignes :

- Utilisez une boucle for pour parcourir les nombres.
- Utilisez des conditions (if, else if, else) pour vérifier les multiples.
- Utilisez des variables pour stocker les résultats intermédiaires.
- Utilisez des opérateurs (%, &&, ||) pour les vérifications.
- Affichez toutes les informations avec console.log.

## Exemple de résultat dans la console :

```
1 n'est pas un multiple de 3 ni de 5 (type : number)
2 n'est pas un multiple de 3 ni de 5 (type : number)
3 est un multiple de 3 (type : number)
4 n'est pas un multiple de 3 ni de 5 (type : number)
5 est un multiple de 5 (type : number)
6 est un multiple de 3 (type : number)
...
15 est un multiple de 3 et 5 (type : number)
...
50 est un multiple de 5 (type : number)
```