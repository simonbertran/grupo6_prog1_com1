let queryString = location.search;
let queryStrinObj = new URLSearchParams(queryString);
let id = queryStrinObj.get("id");
console.log(id)

let categoria = document.querySelector(".categoryBody");
let h1 = document.querySelector(".h1Category")

h1.innerHTML += `<h1>${id}</h1> ` 
fetch(`https://dummyjson.com/recipes/tag/${id}`)
.then(function (response) {return response.json();})
.then(function (data) {
    console.log(data)
    for (let i = 0; i < data.recipes.length; i++) {
        categoria.innerHTML += `<div class="card card${i}"><img src="${data.recipes[i].image}" alt="fotoReceta" class="cardImg"><h5>${data.recipes[i].name}</h5><h6>Dificultad: ${data.recipes[i].difficulty} </h6><a href ="detalle.html?id=${data.recipes[i].id}" class="buttonCard">Conocer más</a></div>`    
    }
        //  `<div class="card card${i}"><img src="${data.recipes[i].image}" alt="fotoReceta" class="cardImg"><h5>${data.recipes[i].name}</h5><h6>Dificultad: ${data.recipes[i].difficulty} </h6><a href ="detalle.html?id=${data.recipes[i].id}" class="buttonCard">Conocer más</a></div>  
});

