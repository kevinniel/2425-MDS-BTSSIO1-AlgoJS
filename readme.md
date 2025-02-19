# Cours algo JS

https://github.com/kevinniel/2425-MDS-BTSSIO1-AlgoJS

## Étapes TP

1. ✅ Intégrer la maquette
    - ✅ à minima, il faut un tableau et un formulaire => pour démarrer le JS, ce n'est pas grace s'il n'y a pas de design
2. Attaquer la partie JS
    - ✅ Récupérer les valeurs du formulaire quand on le soumet
        - détecter la soumission du formulaire => addEventListener - submit
        - récupérer les valeurs des champs du formulaire => pour chaque champs : 
            - initialiser une variable => let / const
            - y mettre l'élément => document.querySelector("SELECTEUR_CSS")
            - pour pouvoir accéder à sa valeur => element.value
    - ❌ déclencher les calculs et les stocker dans des variables
        - (A) Calcul du taux d'intérêt mensuel
        - (B) Calcul de la durée du prêt en mois
        - (C) Calcul des intérêts d'un mois
        - (D) Calcul de l'échéance mensuelle
        - (E) Calcul de l'amortissement
    - ❌ Afficher les résultats dans le tableau
        - boucler sur chaque "ligne" de résultat, pour en faire une "ligne" de tableau
            - créer l'élément "tr"
            - créer la colonne "mois"
                - créer l'élément "td"
                - y mettre la valeur du mois => c'est le nombre de tour dans la boucle !
                - mettre le "td" à la fin du "tr" => append
            - créer la colonne "solde initial"
                - créer l'élément "td"
                - y mettre la valeur correspondante
                - mettre le "td" à la fin du "tr" => append
            - créer la colonne "échéance"
                - créer l'élément "td"
                - y mettre la valeur correspondante
                - mettre le "td" à la fin du "tr" => append
            - créer la colonne "intérêt"
                - créer l'élément "td"
                - y mettre la valeur correspondante
                - mettre le "td" à la fin du "tr" => append
            - créer la colonne "amortissement"
                - créer l'élément "td"
                - y mettre la valeur correspondante
                - mettre le "td" à la fin du "tr" => append
            - créer la colonne "solde restant"
                - créer l'élément "td"
                - y mettre la valeur correspondante
                - mettre le "td" à la fin du "tr" => append
            - Mettre le "tr" dans le tableau !
    - ❌ Mettre en place les vérifications avant la réalisation des calculs
        - à faire dès la soumission du formulaire
        - prendre chaque champs un par un :
            - récupérer la valeur
            - vérifier qu'elle est conforme aux attentes
            - si un seul champs n'est pas conforme, afficher un message d'erreur et ne pas soumettre le formulaire :
                - créer un élément "p"
                - y mettre le message d'erreur
                - l'afficher en dessous du champs correspondant (append - querySelector)
                - ne pas faire la suite du traitement