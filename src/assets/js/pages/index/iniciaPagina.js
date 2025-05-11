import { setupRange } from '../../components/inputRange.js';
import { renderizarMenu } from '../../components/menuLateral.js'
import { configurarEventos } from './eventos.js';

export function iniciarPagina() {
  setupRange('precoRange', 'precoValor', 'R$ ');
  setupRange('mlRange', 'mlValor', 'ml');
  setupRange('distanciaRange', 'distanciaValor', 'km');

  renderizarMenu(0);
  configurarEventos();
}