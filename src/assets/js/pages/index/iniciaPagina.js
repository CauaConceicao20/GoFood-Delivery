import { setupRange } from './inputRange.js';
import { definiOpcoesDoMenuLateral } from './menuLateral.js';

export function inicializar() {
  setupRange('precoRange', 'precoValor', 'R$ ');
  setupRange('mlRange', 'mlValor', 'ml');
  setupRange('distanciaRange', 'distanciaValor', 'km');
  definiOpcoesDoMenuLateral(0);
}