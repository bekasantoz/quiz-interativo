// Configurações das respostas
const responses = {
    a: {
        title: "Resposta Incorreta",
        message: "Volte para a 1ª série! Um século é muito mais que 10 anos.",
        correct: false,
        icon: "✗"
    },
    b: {
        title: "Resposta Correta!",
        message: "Parabéns! Um século tem exatamente 100 anos. Você demonstrou um conhecimento excelente!",
        correct: true,
        icon: "✓"
    },
    c: {
        title: "Resposta Incorreta",
        message: "MEU DEUS!!! Isso é um milênio, não um século!",
        correct: false,
        icon: "😱"
    },
    d: {
        title: "Sem resposta",
        message: "Não dá para arriscar nada?!?! Às vezes é melhor tentar do que desistir!",
        correct: false,
        icon: "🤔"
    }
};

let score = 0;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar eventos aos botões
    document.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', function() {
            const option = this.getAttribute('data-option');
            showFeedback(option);
            document.getElementById('progress').style.width = '100%';
            
            // Atualizar pontuação
            if (option === 'b') {
                score += 10;
                document.getElementById('score-value').textContent = score;
                createConfetti();
            }
        });
    });
    
    // Evento para fechar o modal
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
});

// Mostrar feedback
function showFeedback(option) {
    const feedback = responses[option];
    const modal = document.getElementById('feedbackModal');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const modalIcon = document.getElementById('modalIcon');
    
    // Configurar conteúdo do modal
    modalTitle.textContent = feedback.title;
    modalMessage.textContent = feedback.message;
    modalIcon.textContent = feedback.icon;
    
    // Alterar estilo baseado na resposta
    if (feedback.correct) {
        modalContent.classList.add('correct');
        modalContent.classList.remove('incorrect', 'neutral');
    } else if (option === 'd') {
        modalContent.classList.add('neutral');
        modalContent.classList.remove('correct', 'incorrect');
    } else {
        modalContent.classList.add('incorrect');
        modalContent.classList.remove('correct', 'neutral');
    }
    
    // Mostrar modal
    modal.style.display = 'flex';
}

// Fechar modal
function closeModal() {
    document.getElementById('feedbackModal').style.display = 'none';
}