let categorias = document.querySelector(".categoriesBody");


fetch(`https://dummyjson.com/recipes/tags`)
.then(function (response) {return response.json();})
.then(function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        categorias.innerHTML += `<a href ="category.html?id=${data[i]}" class="detalle_categories"><p >${data[i]}</p></a> `;
    }
        //  `<div class="card card${i}"><img src="${data.recipes[i].image}" alt="fotoReceta" class="cardImg"><h5>${data.recipes[i].name}</h5><h6>Dificultad: ${data.recipes[i].difficulty} </h6><a href ="detalle.html?id=${data.recipes[i].id}" class="buttonCard">Conocer más</a></div>  
});
