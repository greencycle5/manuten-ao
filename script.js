function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const senhaCorreta = "referenz2024"; // Defina a senha aqui

    if (senha === senhaCorreta) {
        window.location.href = "https://greencycle5.github.io/ref/";
    } else {
        alert("Senha incorreta! Tente novamente.");
    }
}
