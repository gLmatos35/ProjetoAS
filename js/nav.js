// Obtém o URL da página atual
const currentPage = window.location.href;

// Seleciona todos os ícones da barra de navegação
const navIcons = document.querySelectorAll('.nav-icon');

// Verifica se o URL atual corresponde ao link da barra de navegação e adiciona a classe ativa ao ícone correspondente
navIcons.forEach(icon => {
    if (icon.parentElement.href === currentPage) {
        icon.classList.add('active');
    }
});
