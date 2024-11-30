let queryString = location.search;
let queryStrinObj = new URLSearchParams(queryString);
let buscar = queryStrinObj.get("search");
console.log(buscar);

let seccion = document.querySelector('.card_article');

function agregarRecetas() {
    fetch(`https://dummyjson.com/recipes/search?q=${buscar}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.recipes.length > 0){
            for (let i = 0; i < data.recipes.length; i++) {
                let receta = data.recipes[i];
                seccion.innerHTML += `<div class="card card${i}"><img src="${data.recipes[i].image}" alt="fotoReceta" class="cardImg"><h5>${data.recipes[i].name}</h5><h6>Dificultad: ${data.recipes[i].difficulty} </h6><a href ="detalle.html?id=${data.recipes[i].id}" class="buttonCard">Conocer más</a></div>`
                    ;
            }}
            else {
                seccion.innerHTML += "<h1>Not found. La busqueda no coincide con nongun resultado.</h1>"
            }
        })
        .catch(function (error) {
            console.error("Error al obtener las recetas:", error);
        });
}

agregarRecetas();
