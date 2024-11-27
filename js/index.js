let cards = document.querySelector(".card_article");
// let botonAgregar = 
buttonAgregar = document.querySelector(".botonAgregar")
let cantidadRecetas = 0;

function agregarRecetas() {
    fetch('https://dummyjson.com/recipes')
        .then(function (response) { return response.json(); })
        .then(function (data) {
            let recetas = data;
            agregarRecetasScreen(recetas, 10);
        })
}

function agregarRecetasScreen(recetas, x) {
    if (cantidadRecetas >= 30){
        alert("Ya se muestran todas las recetas!");
    }
    else{
    for (let i = cantidadRecetas; i < cantidadRecetas+x; i++) {
        console.log(recetas.recipes[i]);
        cards.innerHTML += `<div class="card card${i}"><img src="${recetas.recipes[i].image}" alt="fotoReceta" class="cardImg"><h3>${recetas.recipes[i].name}</h3><p>dificultad: ${recetas.recipes[i].difficulty} </p><a href ="detalle.html?id=${recetas.recipes[i].id}" class="buttonCard">Conocer más</a></div>`;
    }
    cantidadRecetas += x; }
}
agregarRecetas();
buttonAgregar.addEventListener("click", function () { agregarRecetas() });

