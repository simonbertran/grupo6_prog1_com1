let queryString = location.search;
let queryStrinObj = new URLSearchParams(queryString);

let id = queryStrinObj.get("id");

fetch(`https://dummyjson.com/recipes/${id}`);