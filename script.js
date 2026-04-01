const painel = document.getElementById("painel");
const nomeEl = document.getElementById("nome");
const infoEl = document.getElementById("info");
const followersEl = document.getElementById("followers");
const followers_numberEl = document.getElementById("followers_number");
const viewersEl = document.getElementById("viewers");


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
