import { inicializar } from './iniciaPagina.js';
import { exibirMenuLateral } from './menuLateral.js';
import { abrirModal, fecharModal } from './modal.js';


document.addEventListener('DOMContentLoaded', () => {
    inicializar();
});

let btnFechar = document.getElementById("btnFechar");
let btnEndereco = document.getElementById("btnEndereco");

let btnPerfil = document.getElementById("btnPerfilll");

btnPerfil.addEventListener("click", () => exibirMenuLateral());

btnEndereco.addEventListener("click", () => abrirModal());

btnFechar.addEventListener("click", () => fecharModal());

