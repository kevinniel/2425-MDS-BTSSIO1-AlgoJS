console.log("toto")


// Sélectionner le bouton "envoyer"
const btn_submit = document.querySelector("#btn_submit");
console.log(btn_submit);

btn_submit.addEventListener("click", function(event) {
    event.preventDefault(); 
    console.log("click");
    // ici le traitement au click

    // récupération du contenu de l'input
    const input = document.querySelector("#input");
    console.log(input.value);

    // on vérifie que la valeur ne soit pas vide
    if(input.value !== "") {
        // on colle la valeur dans le tableau

        // on crée la case
        const td = document.createElement("td");
        // on lui donne le contenu
        td.innerText = input.value;
        // on crée la ligne : 
        const tr = document.createElement("tr");
        // on colle la case dans la ligne
        tr.append(td);
        // on sélectionne l'endroit où doit être la ligne
        const ici = document.querySelector("#ici");
        // on l'intègre
        ici.append(tr);

        // on vide la case
        input.value = "";
    }

});


