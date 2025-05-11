import { exibirMenuLateral } from '../index/menuLateral.js';
import { abrirModal, fecharModal } from '../../global/modal.js';



let btnFechar = document.getElementById("btnFechar");
let btnEndereco = document.getElementById("btnEndereco");

let btnPerfil = document.getElementById("btnPerfilll");

btnPerfil.addEventListener("click", () => exibirMenuLateral());

btnEndereco.addEventListener("click", () => abrirModal());

btnFechar.addEventListener("click", () => fecharModal());

