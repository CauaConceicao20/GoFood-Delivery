import { renderizarMenuPerfil } from "../../components/menuLateral.js"
import { configurarEventos } from "./eventos.js";

export function iniciarPagina() {
  
  window.addEventListener('resize', () => {
    const menuInferior = document.getElementById("menuInferior");
    const menuLateralPerfil = document.getElementById("menuLateral");

    const overlayMenuInferior = document.getElementById("overlayMenuInferior");
    const overlayMenuLateral = document.getElementById("overlay");

    if (window,innerWidth >= 579) {
        menuInferior.classList.remove("ativo");
        overlayMenuInferior.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");
    }else if (window, innerWidth <= 579) {
        menuLateralPerfil.classList.remove("ativo");
        overlayMenuLateral.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");
    }
});
  renderizarMenuPerfil(1);
  configurarEventos();
}