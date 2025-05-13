import { fecharModal } from "./modal.js";

export function configurarAdicionarEndereco() {
    const btn = document.getElementById("btnAddEnderecoModal");
    const input = document.getElementById("inputEndereco");
    const destino = document.getElementById("btnEndereco");

    btn.addEventListener("click", () => {
        const endereco = input.value.trim();

        if (endereco.length === 0) {
            alert("Digite um endereço válido.");
            return;
        }

        destino.textContent = endereco;
        fecharModal();
    });
}