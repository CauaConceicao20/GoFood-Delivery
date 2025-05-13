function renderizarMenuInferior(idBtn, estadoDoUsuario) {
    let menu = document.getElementById("menuOpcoes");
    if (idBtn == "btnPerfilFooter" && estadoDoUsuario == 0) {
        menu.innerHTML = `
        
            <li>Login</li>
            <li>Cadastrar</li>
      
        `
    } else if (idBtn == "btnPerfilFooter" && estadoDoUsuario == 1) {
        menu.innerHTML = `
        
            <li>Seus Pedidos</li>
            <li>Alterar Dados</li>
            <li>Cadastrar/Atualizar Restaurante</li>
            <li>Sair</li>
       
        `
    } else if (idBtn == "btnHamburguerFooter") {
        menu.innerHTML = `
       
            <li>Pedidos</li>
            <li>Configurações</li>
            <li>Suporte</li>
            <li>reportar</li>
   
        `
    } else {
        alert("Algo está errado! tente novamente mais tarde")
    }
}


export function expandirMenuInferior(idBtn, estadoDoUsuario) {
    renderizarMenuInferior(idBtn, estadoDoUsuario);
    const menu = document.getElementById("menuInferior");
    const overlay = document.getElementById("overlayMenuInferior");

    menu.classList.toggle("ativo");

    if (menu.classList.contains("ativo")) {
        overlay.classList.add("ativo");
        document.body.classList.add("menu-aberto");
    } else {
        overlay.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");
    }

    event.stopPropagation();
}

export function fecharMenuInferior() {
    document.getElementById('menuInferior').classList.toggle('ativo');
    const overlay = document.getElementById("overlayMenuInferior");

    overlay.classList.remove("ativo");
    document.body.classList.remove("menu-aberto");
}

export function fecharMenuInferiorComCLickExterno(event) {

    const menuInferior = document.getElementById("menuInferior");
    const overlay = document.getElementById("overlayMenuInferior");


    if ((menuInferior.classList.contains("ativo")) && (!menuInferior.contains(event.target))) {
        menuInferior.classList.remove("ativo");
        overlay.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");
    }
}

export function configurarMenuInferior() {
    const path = window.location.pathname;

    const botoes = document.querySelectorAll(".area-opcao-bottom-bar");
    botoes.forEach(botao => botao.classList.remove("ativo"));

    if (path.includes("index.html")) {
        document.querySelector("#btnInicio .area-opcao-bottom-bar").classList.add("ativo");
    } else if (path.includes("carrinho.html")) {
        document.querySelector("#btnCarrinhoFooter .area-opcao-bottom-bar").classList.add("ativo");
    }
}