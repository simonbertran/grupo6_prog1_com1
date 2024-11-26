// fetch('https://dummyjson.com/recipes?limit=10&select=name,image,difficulty')
// .then(res => res.json())
// .then(function(data){console.log(data.recipes);

//     let info=data.recipes;
//     let RecetaHome=document.querySelector(".RecetasHome")
//     let diezRecetas= "";
//     for (let i=0;i< info.length; i++){
//         diezRecetas += `<li> <a href = "Receta.html?id=${info[i].id}">

//         <img src=${info[i].image}>
//         <p> ${info[i].name}</p>
//         <p> dificultad:${info[i].difficulty}</p></a> 
//         </li>`

//     }
//     RecetaHome.innerHTML= diezRecetas; 


// })
// .catch(function(error){alert("error")})


// let rafa = fetch('https://dummyjson.com/recipes')
// .then(function(response){return response.json();})
// .then(function(data){return data;})
// console.log(rafa);

let cards =document.querySelector(".card_article")


fetch('https://dummyjson.com/recipes')
    .then(function (response) { return response.json(); })
    .then(function (data) {
        let recetas = data;

        console.log(recetas.recipes[1]);

        agregarRecetas(recetas, 10);

    })



function agregarRecetas(recetas, x) {
    for (let i = 0; i < x; i++) {
        console.log(recetas.recipes[i]);
        cards += `<div class="card${i}"><img src="" alt="fotoReceta"><h3>${recetas.recipes[i].name}</h3><p>dificultad: </p><h5>link</h5></div>`;
    }
}

agregarRecetas(5);

// let campoBuscar = document.querySelector(".buscarInput");

// campoBuscar.addEventListener('input', function () { })