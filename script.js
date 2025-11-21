function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    // Usuário e senha definidos
    const usuarioCorreto = "admin";
    const senhaCorreta  = "1234";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login realizado com sucesso!");
        window.location.href = "home.html"; // redireciona
    } else {
        document.getElementById("erro").style.display = "block";
    }
}