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
