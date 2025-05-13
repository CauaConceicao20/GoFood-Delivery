export function configurarSelecaoCategorias() {
  const categorias = document.querySelectorAll(".opcao-categoria");

  categorias.forEach((categoriaClicada) => {
    categoriaClicada.addEventListener("click", () => {
      categorias.forEach(categoriaRemover => categoriaRemover.classList.remove("selecionada"));

      categoriaClicada.classList.add("selecionada");
    });
  });
}