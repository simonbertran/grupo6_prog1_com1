fetch('https://dummyjson.com/recipes?limit=10&select=name,image,difficulty')
.then(res => res.json())
.then(function(data){console.log(data.recipes);

    let info=data.recipes;
    let RecetaHome=document.querySelector(".RecetasHome")
    let diezRecetas= "";
    for (let i=0;i< info.length; i++){
        diezRecetas += `<li> <a href = "Receta.html?id=${info[i].id}">

        <img src=${info[i].image}>
        <p> ${info[i].name}</p>
        <p> dificultad:${info[i].difficulty}</p></a> 
        </li>`

    }
    RecetaHome.innerHTML= diezRecetas; 

    
})
.catch(function(error){alert("error")})

