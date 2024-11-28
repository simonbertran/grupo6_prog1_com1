let form = document.querySelector(".formLogin")
let campoEmail = document.querySelector("#email");
let campoContraseña = document.querySelector("#contraseña")

form.addEventListener('submit', function(event){
    event.preventDefault();

    
    let valid = true

    if (campoEmail.value == '') {
        valid = false;
        alert("Por favor complete el campo email");
        
    }
    
    if (campoContraseña.value == ''){
        valid = false;
        alert("Por favor complete el campo contraseña");
        
    }

    if(valid){
        form.submit()
    }


});