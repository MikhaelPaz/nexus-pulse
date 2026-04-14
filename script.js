function mostrarDadosStreamers(nome, info, followers, followers_number, viewers) {
    const painel = document.getElementById("painel");
    const nomeEl = document.getElementById("nome");
    const infoEl = document.getElementById("info");
    const followersLabelEl = document.getElementById("followers-label");
    const followersNumberEl = document.getElementById("followers_number");
    const viewersEl = document.getElementById("viewers");
    const aproveitamentoEl = document.getElementById("aproveitamento");

    nomeEl.textContent = nome;
    infoEl.textContent = info;
    followersLabelEl.textContent = followers;
    followersNumberEl.textContent = followers_number;
    viewersEl.textContent = viewers;
    aproveitamentoEl.textContent = "-";

    painel.style.display = "block";
}

function mostrarDadosJogadores(nome, info, valorAproveitamento) {
    const painel = document.getElementById("painel");
    const nomeEl = document.getElementById("nome");
    const infoEl = document.getElementById("info");
    const followersLabelEl = document.getElementById("followers-label");
    const followersNumberEl = document.getElementById("followers_number");
    const viewersEl = document.getElementById("viewers");
    const aproveitamentoEl = document.getElementById("aproveitamento");

    nomeEl.textContent = nome;
    infoEl.textContent = info;
    followersLabelEl.textContent = "Followers";
    followersNumberEl.textContent = "-";
    viewersEl.textContent = "-";
    aproveitamentoEl.textContent = valorAproveitamento;

    painel.style.display = "block";
}

function fecharPainel() {
    const painel = document.getElementById("painel");
    painel.style.display = "none";
}

// Close panel when clicking outside of it
document.addEventListener('click', function(event) {
    const painel = document.getElementById('painel');
    const cardClicked = event.target.closest('.card');
    
    if (cardClicked) {
        // Card click: do nothing (onclick handlers will open panel)
        return;
    }
    
    if (painel.style.display === 'block' && !painel.contains(event.target)) {
        fecharPainel();
    }
});

// Prevent panel clicks from bubbling (optional safety)
document.getElementById('painel').addEventListener('click', function(event) {
    event.stopPropagation();
});