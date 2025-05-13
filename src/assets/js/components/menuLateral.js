export function renderizarMenuPerfil(estadoDoUsuario) {
    let menu = document.getElementById("navegacaoMenu");

    if (estadoDoUsuario == 1) {
        menu.innerHTML =
            `<ul>
            <li><a href="pedidos.html">Pedidos</a></li>
            <li><a href="perfil.html">Perfil</a></li>
            <li><a href="configuracoes.html">Configurações</a></li>
            <li><a href="sobre.html">Sobre</a></li>
            </ul>
            `
    } else if (estadoDoUsuario == 0) {
        menu.innerHTML =
            `<ul>
            <li><a href="login.html">Entrar</a></li>
            <li><a href="cadastro.html">Cadastrar</a></li>
            </ul>
            `
    }
}

export function menuLateralPerfil(event) {
    const menu = document.getElementById("menuLateral");
    const overlay = document.getElementById("overlay");

    // Alterna classe "ativo" no menu
    menu.classList.toggle("ativo");

    // Se o menu está ativo, ativa overlay e bloqueia body
    if (menu.classList.contains("ativo")) {
        overlay.classList.add("ativo");
        document.body.classList.add("menu-aberto");
    } else {
        overlay.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");
    }

    // Impede que o clique no botão propague para o overlay
    event.stopPropagation();
}

export function menuLateralFiltro(event) {
    const menu = document.getElementById('filtrosMenu');
    const overlay = document.getElementById('overlayMenuFiltro');

    if (window.innerWidth <= 1229) {
        menu.classList.add('flutuante');
        menu.classList.toggle('ativo');
    }


    if (menu.classList.contains('ativo')) {
        overlay.classList.add('ativo');
        document.body.classList.add('menu-aberto');
    } else {
        overlay.classList.remove('ativo');
        document.body.classList.remove('menu-aberto');
    }
    event.stopPropagation();
}

export function fecharMenuLateral(event) {

    let menuLateral = document.getElementById("menuLateral");

    if ((menuLateral.classList.contains("ativo")) && (!menuLateral.contains(event.target))) {
        menuLateral.classList.remove("ativo");
        overlay.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");
    }
}

export function fecharMenuLateralFiltro(event) {
    const menu = document.getElementById('filtrosMenu');
    const overlay = document.getElementById('overlayMenuFiltro');

    if (menu.classList.contains('ativo') && !menu.contains(event.target)) {
        menu.classList.remove('ativo');
        overlay.classList.remove('ativo');
        document.body.classList.remove('menu-aberto');
    }
}

