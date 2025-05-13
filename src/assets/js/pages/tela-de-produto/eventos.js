import { abrirModal, fecharModal, fecharModalComClickExterno } from '../../components/modal.js';
import { menuLateralPerfil, fecharMenuLateral } from '../../components/menuLateral.js';
import { expandirMenuInferior, fecharMenuInferior, fecharMenuInferiorComCLickExterno, configurarMenuInferior } from '../../components/menuInferior.js';
import { configurarAdicionarEndereco } from '../../components/endereco.js';
import { voltarPaginaAnterior } from '../../components/navegacaoDePg.js';

export function configurarEventos() {
  document.getElementById("btnPerfilHeader").addEventListener("click", menuLateralPerfil);
  document.getElementById("btnEndereco").addEventListener("click", abrirModal);
  document.getElementById("btnFecharModal").addEventListener("click", fecharModal);
  document.getElementById("modalArea").addEventListener("click", fecharModalComClickExterno);

  document.addEventListener("click", fecharMenuLateral);
  document.addEventListener("click", fecharMenuInferiorComCLickExterno);

  configurarMenuInferior();
  configurarAdicionarEndereco();

  const btnHamburguerFooter = document.getElementById("btnHamburguerFooter");
  const btnPerfilFooter = document.getElementById("btnPerfilFooter");
  const btnFecharMenuInferior = document.getElementById("btnFecharMenuInferior");
  const btnVoltar = document.getElementById("btnVoltar");

  if (btnHamburguerFooter) {
    btnHamburguerFooter.addEventListener("click", () => expandirMenuInferior("btnHamburguerFooter", 0));
  }

  if (btnPerfilFooter) {
    btnPerfilFooter.addEventListener("click", () => expandirMenuInferior("btnPerfilFooter", 1));
  }

  if (btnFecharMenuInferior) {
    btnFecharMenuInferior.addEventListener("click", fecharMenuInferior);
  }

  if (btnVoltar) {
    btnVoltar.addEventListener("click", voltarPaginaAnterior);
  }
}