export function definiOpcoesDoMenuLateral(estadoDoUsuario) {
    let menu = document.getElementById("navegacaoMenu");

    if (estadoDoUsuario == 1) {
        menu.innerHTML =
            `
            <li><a href="pedidos.html">Pedidos</a></li>
            <li><a href="perfil.html">Perfil</a></li>
            <li><a href="configuracoes.html">Configurações</a></li>
            <li><a href="sobre.html">Sobre</a></li>
            `
    } else if (estadoDoUsuario == 0) {
        menu.innerHTML =
            `
            <li><a href="login.html">Entrar</a></li>
            <li><a href="cadastro.html">Cadastrar</a></li>
            `
    }
}

export function exibirMenuLateral() {
    const menu = document.getElementById('menuLateral');
    menu.classList.toggle('ativo');
}

