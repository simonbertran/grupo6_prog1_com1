let queryString = location.search;
let queryStrinObj = new URLSearchParams(queryString);
let id = queryStrinObj.get("id");
console.log(id)
let informacion = document.querySelector(".informacion");
let ulIngredientes = document.querySelector(".ulIngredientes");
let ulInstrucciones = document.querySelector(".instrucciones");
let categorias = document.querySelector(".categorias");
fetch(`https://dummyjson.com/recipes/${id}`).then(function (response) { return response.json() }).then(function (data) {
    console.log(data);
    informacion.innerHTML += `
    <h1 class="h1Detalle">${data.name}</h1>
     <h3 class ="h3Detalle">Tiempo coccion: ${data.prepTimeMinutes} minutos</h3> 
    <div class="detalle_img_container">
    <img src="${data.image}" alt="imagen${data.name}" srcset="" class = "detalle_img"</div> `

    for (let i = 0; i < data.ingredients.length; i++) {
        ulIngredientes.innerHTML += `<li>${data.ingredients[i]}</li>`;
    }
    for (let i = 0; i < data.instructions.length; i++) {
        ulInstrucciones.innerHTML += `<li>${data.instructions[i]}</li>`;
    }
    for (let i = 0; i < data.tags.length; i++) {
        console.log(data.tags[i])
        categorias.innerHTML += `<a href ="category.html?id=${data.tags[i]}"><p>${data.tags[i]}</p></a> `;
    }
})




