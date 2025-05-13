import { abrirModal, fecharModal, fecharModalComClickExterno } from '../../components/modal.js';
import { menuLateralPerfil, fecharMenuLateral } from '../../components/menuLateral.js';
import { expandirMenuInferior, fecharMenuInferior, fecharMenuInferiorComCLickExterno, configurarMenuInferior} from '../../components/menuInferior.js';
import { configurarAdicionarEndereco } from '../../components/endereco.js';

export function configurarEventos() {
  document.getElementById("btnPerfilHeader").addEventListener("click", menuLateralPerfil);
  document.getElementById("btnEndereco").addEventListener("click", abrirModal);
  document.getElementById("btnFecharModal").addEventListener("click", fecharModal);
  document.getElementById("modalArea").addEventListener("click", fecharModalComClickExterno);

  document.addEventListener("click", fecharMenuLateral);
  document.addEventListener("click", fecharMenuInferiorComCLickExterno);

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