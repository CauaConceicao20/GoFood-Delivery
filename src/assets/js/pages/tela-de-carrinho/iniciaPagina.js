import { renderizarMenu } from "../../components/menuLateral.js"
import { configurarEventos } from "./eventos.js";
import { ocultaElementos } from "../../components/header.js"

let path = "src/carrinho.html";

export function iniciarPagina() {
  renderizarMenu(0);
  configurarEventos();
  ocultaElementos(path);
}