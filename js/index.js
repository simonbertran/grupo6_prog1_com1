let cards = document.querySelector(".card_article");
// let botonAgregar = 
buttonAgregar = document.querySelector(".botonAgregar")
form = document.querySelector(".formNav")
buscador = document.querySelector(".searchForm")
let cantidadRecetas = 0;

form.addEventListener('submit', function (event) {event.preventDefault(); console.log("!") ;let valido =true;

    if(buscador.value = ""){valido = false; alert("Por favor completar con informacion");}
    else if (buscador.length < 3) {
        valido = false;  alert("La palabra buscada deberia ser más larga");
        
    }
    else{this.submit();}
  })

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
        cards.innerHTML += `<div class="card card${i}"><img src="${recetas.recipes[i].image}" alt="fotoReceta" class="cardImg"><h5>${recetas.recipes[i].name}</h5><h6>Dificultad: ${recetas.recipes[i].difficulty} </h6><a href ="detalle.html?id=${recetas.recipes[i].id}" class="buttonCard">Conocer más</a></div>`;
    }
    cantidadRecetas += x; }
}
agregarRecetas();
buttonAgregar.addEventListener("click", function () { agregarRecetas() });

