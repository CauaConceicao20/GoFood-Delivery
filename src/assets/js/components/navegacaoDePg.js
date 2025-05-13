export function voltarPaginaAnterior() {
  if (document.referrer === "" || window.history.length <= 1) {
    window.location.href = "/src/index.html";
  } else {
    window.history.back(); 
  }
}