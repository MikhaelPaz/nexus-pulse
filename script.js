function mostrarDados(nome, info, followers, followers_number, viewers) {
    if (painel.style.display === 'none') {
        const painel = document.getElementById("painel");
        const nomeEl = document.getElementById("nome");
        const infoEl = document.getElementById("info");
        const followersEl = document.getElementById("followers");
        const followers_numberEl = document.getElementById("followers_number");
        const viewersEl = document.getElementById("viewers");


        nomeEl.textContent = nome;
        infoEl.textContent = info;
        followersEl.textContent = followers;
        followers_numberEl.textContent = followers_number;
        viewersEl.textContent = viewers;



        painel.style.display = "block";
    }
    else{
        painel.style.display = 'none';
    }
}
