// Aguarda o carregamento total do DOM antes de executar as ações
document.addEventListener('DOMContentLoaded', () => {
    
    // Mapeamento dos elementos de interface
    const btnCalcular = document.getElementById('btn-calcular');
    const resultadoPainel = document.getElementById('resultado-painel');
    const scoreValue = document.getElementById('score-value');
    const scoreStatus = document.getElementById('score-status');
    const scoreFeedback = document.getElementById('score-feedback');

    // Listener do evento de clique do botão
    btnCalcular.addEventListener('click', () => {
        // Captura e conversão dos valores selecionados no formulário
        const valorCobertura = parseInt(document.getElementById('cobertura').value);
        const valorIrrigacao = parseInt(document.getElementById('irrigacao').value);
        const valorDefensivos = parseInt(document.getElementById('defensivos').value);

        // Lógica de cálculo: Média simples aritmética
        const mediaFinal = Math.round((valorCobertura + valorIrrigacao + valorDefensivos) / 3);

        // Atualiza o painel com o valor numérico
        scoreValue.textContent = mediaFinal;

        // Limpa classes anteriores de estilização do painel de resultado
        resultadoPainel.className = 'result-box';

        // Estrutura condicional para determinar o status e dar o feedback
        if (mediaFinal >= 80) {
            resultadoPainel.classList.add('excelente');
            scoreStatus.textContent = "Equilíbrio Excelente!";
            scoreFeedback.textContent = "Parabéns! Sua propriedade aplica perfeitamente o tema do Agrinho 2026. Suas ações garantem um solo forte e preservam o ecossistema para o futuro.";
        } else if (mediaFinal >= 50) {
            resultadoPainel.classList.add('regular');
            scoreStatus.textContent = "Atenção: Precisa de Ajustes";
            scoreFeedback.textContent = "Você já adota bons caminhos, mas ainda há vulnerabilidades. Considere aumentar a palhada de proteção do solo e migrar para manejo biológico de pragas.";
        } else {
            resultadoPainel.classList.add('critico');
            scoreStatus.textContent = "Alerta Crítico de Degradação";
            scoreFeedback.textContent = "Risco elevado de erosão severa e escassez de nutrientes. Recomendamos a transição imediata para cobertura morta vegetal e revisão nos sistemas de água.";
        }

        // Torna o painel visível suavemente na tela
        resultadoPainel.classList.remove('hidden');
        
        // Rola a tela sutilmente até o painel de resultados
        resultadoPainel.scrollIntoView({ behavior: 'smooth' });
    });
});
