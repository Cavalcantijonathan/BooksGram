function login() {
    var name = document.querySelector('#inputNome').value; // Chama o valor inserido.

    if ( name === "") {
       return alert("Digite um nome primeiro");        
    }        
    
    sessionStorage.setItem("nomeUsuario", name);
    location.href = "/feed.html";
};

var btnLogin = document.querySelector("#btnLogin");

btnLogin.addEventListener('click', login);