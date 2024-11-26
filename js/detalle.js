let queryString = location.search;
let queryStrinObj = new URLSearchParams(queryString);
let id = queryStrinObj.get("id");

let informacion = document.querySelector(".informacion");

fetch(`https://dummyjson.com/recipes/${id}`).then(function(response){return response.json()}).then(function(data){
    informacion.innerHTML += `<p>${data.name}</p>`
})

agreg