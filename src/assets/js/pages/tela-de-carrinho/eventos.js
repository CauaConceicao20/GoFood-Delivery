import { abrirModal, fecharModal } from "../../components/modal.js"
import { menuLateralPerfil } from "../../components/menuLateral.js"

export function configurarEventos() {
  document.getElementById("btnPerfil").addEventListener("click", menuLateralPerfil);//btnPerfil
  document.getElementById("btnEndereco").addEventListener("click", abrirModal);//btnEndereco
  document.getElementById("btnFechar").addEventListener("click", fecharModal);//btnFechar
}