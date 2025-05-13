import { abrirModal, fecharModal, fecharModalComClickExterno } from '../../components/modal.js';
import { menuLateralPerfil, menuLateralFiltro, fecharMenuLateral, fecharMenuLateralFiltro } from '../../components/menuLateral.js';
import { expandirMenuInferior, fecharMenuInferior, fecharMenuInferiorComCLickExterno, configurarMenuInferior} from '../../components/menuInferior.js';
import { configurarSelecaoCategorias } from "../../components/categorias.js";
import { configurarAdicionarEndereco } from '../../components/endereco.js';

export function configurarEventos() {
  document.getElementById("btnPerfilHeader").addEventListener("click", menuLateralPerfil);
  document.getElementById("btnAbrirFiltros").addEventListener("click", menuLateralFiltro);
  document.getElementById("btnEndereco").addEventListener("click", abrirModal);
  document.getElementById("btnFecharModal").addEventListener("click", fecharModal);
  document.getElementById("modalArea").addEventListener("click", fecharModalComClickExterno);
  document.getElementById("btnFecharFiltro").addEventListener("click", menuLateralFiltro);
  document.getElementById("btnAplicarFiltro").addEventListener("click", menuLateralFiltro);

  document.addEventListener("click", fecharMenuLateral);
  document.addEventListener("click", fecharMenuLateralFiltro);
  document.addEventListener("click", fecharMenuInferiorComCLickExterno);

  configurarSelecaoCategorias();
  configurarMenuInferior();
  configurarAdicionarEndereco();

  let btnHamburguerFooter = document.getElementById("btnHamburguerFooter");
  let btnPerfilFooter= document.getElementById("btnPerfilFooter");
  let btnFecharMenuInferior = document.getElementById("btnFecharMenuInferior");
  
  if (btnHamburguerFooter) {
    btnHamburguerFooter.addEventListener("click", () => expandirMenuInferior("btnHamburguerFooter", 0));
  }

  if (btnPerfilFooter) {
    btnPerfilFooter.addEventListener("click", () => expandirMenuInferior("btnPerfilFooter", 1));
  }

  if (btnFecharMenuInferior) {
    btnFecharMenuInferior.addEventListener("click", fecharMenuInferior);
  }
}