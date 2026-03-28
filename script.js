function mostrarDados(nome, info) {
    if (painel.style.display === 'none') {
        const painel = document.getElementById("painel");
        const nomeEl = document.getElementById("nome");
        const infoEl = document.getElementById("info");

        nomeEl.textContent = nome;
        infoEl.textContent = info;

        painel.style.display = "block";
    }
    else{
        painel.style.display = 'none';
    }
}
