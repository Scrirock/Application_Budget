let plus = document.getElementsByClassName("plus");
let moins = document.getElementsByClassName("moins");
let result = 0;

setInterval(()=> {
    for (let i of plus) {
        if (i.value !== "") result += parseFloat(i.value);
    }
    for (let i of moins) {
        if (i.value !== "") result -= parseFloat(i.value);
    }
    document.getElementById("total").innerHTML = result;

    if (result > 0) document.getElementById("budget").innerHTML = "Positif";
    else if (result < 0) document.getElementById("budget").innerHTML = "Négatif";
    else document.getElementById("budget").innerHTML = "Nul";

    if (result > 5000) document.getElementById("achat").innerHTML = "Une moto";
    else if (result < 5000 && result > 3000) document.getElementById("achat").innerHTML = "Une moto... mais d'occasion";
    else if (result < 3000 && result > 1000) document.getElementById("achat").innerHTML = "Une moto... mais en carton";
    else if (result < 1000 && result > 500) document.getElementById("achat").innerHTML = "Une moto... mais pas le moteur";
    else if (result < 500 && result > 100) document.getElementById("achat").innerHTML = "Une moto... mais que les roues";
    else if (result < 100 && result > 50) document.getElementById("achat").innerHTML = "Une moto... mais en gateau";
    else if (result < 50 && result > 10) document.getElementById("achat").innerHTML = "Une moto... mais encadré";
    else if (result < 10 && result > 0) document.getElementById("achat").innerHTML = "Une moto... mais en porte clé";
    else if (result === 0) document.getElementById("achat").innerHTML = "Rien";
    else if (result < 0) document.getElementById("achat").innerHTML = "Rien. Rembourse tes dettes";

    result = 0
}, 500);

function create(nbr, name){
    let addName = document.createElement("p");
    addName.innerHTML = name.value;
    addName.className = "nom"
    name.insertAdjacentElement("beforebegin", addName);

    let addNbr = document.createElement("input");
    addNbr.type = "text";
    addNbr.setAttribute("value", nbr.value);
    addNbr.className = "nbr moins";
    addName.append(addNbr);

    addName.innerHTML += " €";

    name.value = "";
    nbr.value = "";
}

document.getElementById("bFixe").addEventListener("click", ()=>{
    let nbr = document.getElementById("nbrFixe");
    let name = document.getElementById("addFixe");
    create(nbr, name);
});

document.getElementById("bCourante").addEventListener("click", ()=>{
    let nbr = document.getElementById("nbrCourante");
    let name = document.getElementById("addCourante");

    create(nbr, name);
});

document.getElementById("bOccas").addEventListener("click", ()=>{
    let nbr = document.getElementById("nbrOccas");
    let name = document.getElementById("addOccas");

    create(nbr, name);
});

document.getElementById("bAutre").addEventListener("click", ()=>{
    let nbr = document.getElementById("nbrAutre");
    let name = document.getElementById("addAutre");

    create(nbr, name);
});

document.getElementById("bRecette").addEventListener("click", ()=>{
    let nbr = document.getElementById("nbrRecette");
    let name = document.getElementById("addRecette");

    let addName = document.createElement("p");
    addName.innerHTML = name.value;
    addName.className = "nom"
    name.insertAdjacentElement("beforebegin", addName);

    let addNbr = document.createElement("input");
    addNbr.type = "text";
    addNbr.setAttribute("value", nbr.value);
    addNbr.className = "nbr plus";
    addName.append(addNbr);

    addName.innerHTML += " €";

    name.value = "";
    nbr.value = "";
});

document.getElementById("reset").addEventListener("click", ()=>{
   let input = document.getElementsByTagName("input");
   for (let i of input) i.value = "";
});