const formulario = document.getElementById("loginFormulario")
formulario.addEventListener('submit', function(event){
    event.preventDefault();

    if (campoEmail.value == '') {
        alert("Por favor complete el campo email");
        return;
    }
    
    if (campoContraseña.value == ''){
        alert("Por favor complete el campo contraseña");
        return;
    }

    alert("Inicio de sesion exitoso");
    window.location.href = "index.html";


})