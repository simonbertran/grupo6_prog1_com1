let queryString = location.search;
let queryStrinObj = new URLSearchParams(queryString);
let id = queryStrinObj.get("id");
console.log(id)

let categoria = document.querySelector(".categoriaBody");

categoria.innerHTML += `<h1>${id}</h1> ` 
// fetch(`https://dummyjson.com/recipes/tag/${id}`)
// .then(res => res.json())
// .then(

// );

