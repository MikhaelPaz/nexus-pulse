const painel = document.getElementById("painel");
const nomeEl = document.getElementById("nome");
const infoEl = document.getElementById("info");
const followersEl = document.getElementById("followers");
const followers_numberEl = document.getElementById("followers_number");
const viewersEl = document.getElementById("viewers");

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

function mostrarDados(nome, info, followers, followers_number, viewers) {    
    if (painel.style.display === 'none') {
       

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



const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
const overlay = document.getElementById('overlay');

// Função para fechar tudo
function closeMenu() {
    mainNav.classList.remove('active');
    menuBtn.classList.remove('active');
    overlay.classList.remove('active');
}

// Abre/Fecha ao clicar no botão
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mainNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Fecha ao clicar em um link
mainNav.querySelectorAll('h4').forEach(item => {
    item.addEventListener('click', closeMenu);
});

// Fecha ao clicar na overlay (fora do menu)
overlay.addEventListener('click', closeMenu);
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
