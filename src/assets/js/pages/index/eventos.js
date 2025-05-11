import { abrirModal, fecharModal } from '../../components/modal.js';
import { exibirMenuLateral } from '../../components/menuLateral.js';

export function configurarEventos() {
  document.getElementById("btnPerfil").addEventListener("click", exibirMenuLateral);//btnPerfil
  document.getElementById("btnEndereco").addEventListener("click", abrirModal);//btnEndereco
  document.getElementById("btnFechar").addEventListener("click", fecharModal);//btnFechar
}