export function setupRange(inputId, displayId, tipo) {
    const input = document.getElementById(inputId);
    const balao = document.getElementById(displayId);
  
    function atualizarValor() {
      const valor = Number(input.value);
      const min = Number(input.min);
      const max = Number(input.max);
      const porcentagem = (valor - min) / (max - min); //formula par descobrir porcentagem entre min 0 e max
  
      // Atualiza o valor acima do thumb
      if (valor >= max) {
        balao.textContent = `${max}${tipo}`;
      } else {
        balao.textContent = `${valor}${tipo}`;
      }
  
      // Posiciona dinamicamente o balão do valor
      balao.style.left = `calc(${porcentagem * 100}% - 10px)`;
  
      // Atualiza a cor do preenchimento da barra
      input.style.background = `linear-gradient(to right, #E53935 0%, #E53935 ${porcentagem * 100}%, #ddd ${porcentagem * 100}%, #ddd 100%)`;
    }
  
    input.addEventListener('input', atualizarValor);
  
    atualizarValor(); // Chama a função uma vez para definir o valor inicial
  }
