document.getElementById("registroForm").addEventListener("submit", function(event){
    event.preventDefault();

    if (this.checkValidity()){
        window.location.href = "login.html";
    }
})

