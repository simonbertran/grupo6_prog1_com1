let queryString = location.search;
let queryStrinObj = new URLSearchParams(queryString);
let id = queryStrinObj.get("id");

let informacion = document.querySelector(".informacion");

fetch(`https://dummyjson.com/recipes/${id}`).then(function (response) { return response.json() }).then(function (data) {
    console.log(data);
    informacion.innerHTML += `<h1 class="h1Detalle">${data.name}</h1> <img src="${data.image}" alt="imagen${data.name}" srcset=""> `
    for (let i = 0; i < data.ingredients.length; i++) {
        informacion.innerHTML += `<li>${data.ingredients[i]}</li>`;
    }
    })

  

