// Criar efeito de confete
function createConfetti() {
    const confettiCount = 150;
    const container = document.querySelector('body');
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        const colors = ['#4361ee', '#3a0ca3', '#f72585', '#4cc9f0', '#f9c74f'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        confetti.style.backgroundColor = color;
        confetti.style.position = 'absolute';
        confetti.style.top = '0';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.opacity = '0';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        container.appendChild(confetti);
        
        // Animação
        const animationDuration = Math.random() * 2 + 2;
        const animationDelay = Math.random() * 2;
        
        confetti.style.animation = `
            confettiFall ${animationDuration}s ease-in forwards,
            confettiFade ${animationDuration}s ease-in forwards
        `;
        confetti.style.animationDelay = `${animationDelay}s`;
        
        // Remover após animação
        setTimeout(() => {
            confetti.remove();
        }, (animationDelay + animationDuration) * 1000);
    }
    
    // Adicionar keyframes para animação de confete
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            0% { transform: translateY(-100px) rotate(0deg); }
            100% { transform: translateY(100vh) rotate(${Math.random() * 360}deg); }
        }
        
        @keyframes confettiFade {
            0% { opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}