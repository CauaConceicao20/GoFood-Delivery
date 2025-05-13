import { setupRange } from '../../components/inputRange.js';
import { renderizarMenuPerfil } from '../../components/menuLateral.js'
import { configurarEventos } from './eventos.js';

export function iniciarPagina() {
  setupRange('precoRange', 'precoValor', 'R$ ');
  setupRange('mlRange', 'mlValor', 'ml');
  setupRange('distanciaRange', 'distanciaValor', 'km');

  window.addEventListener('resize', () => {
    const menuFiltro = document.getElementById("filtrosMenu");
    const menuInferior = document.getElementById("menuInferior");
    const menuLateralPerfil = document.getElementById("menuLateral");

    const overlay = document.getElementById("overlayMenuFiltro");
    const overlayMenuInferior = document.getElementById("overlayMenuInferior");
    const overlayMenuLateral = document.getElementById("overlay");

    if (window.innerWidth >= 1229) {
        menuFiltro.classList.remove("ativo");
        overlay.classList.remove("ativo");
        document.body.classList.remove("menu-aberto");
    }else if (window,innerWidth >= 579) {
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