let modal = document.getElementById("modalArea");

export function abrirModal() {
    modal.style.display = "block";

}
export function fecharModal() {
    modal.style.display = "none";
}

export function fecharModalComClickExterno(event) {
    if (event.target === modal) {
        fecharModal();
    }
}