let queryString = location.search;
let queryStrinObj = new URLSearchParams(queryString);
let buscar = queryStrinObj.get("search");
console.log(buscar);

let seccion = document.querySelector('.seccion-buscar');

function agregarRecetas() {
    fetch(`https://dummyjson.com/recipes/search?q=${buscar}`)
        .then(function (response) { 
            return response.json(); 
        })
        .then(function (data) {
            for (let i = 0; i < data.recipes.length; i++) {
                let receta = data.recipes[i];
                seccion.innerHTML += `
                    <div class="receta">
                        <h3>${receta.name}</h3>
                        <p>${receta.difficulty}</p>
                    </div>
                `;
            }
        })
        .catch(function (error) {
            console.error("Error al obtener las recetas:", error);
        });
}

agregarRecetas();
