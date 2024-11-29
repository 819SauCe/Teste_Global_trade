document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        const form = event.target;

        // Verifica se o formulário é válido
        if (!form.checkValidity()) {
            return; // Se não for válido, não faz nada
        }

        event.preventDefault(); // Impede o envio padrão do formulário

        const successMessage = document.getElementById('successMessage');
        successMessage.classList.add('show');
        successMessage.style.display = 'block';

        setTimeout(() => {
            successMessage.classList.remove('show');
            successMessage.style.display = 'none';
        }, 3000);

        form.reset();
    });
});

function redirecionar() {
    window.open('https://www.globaltradebr.com.br/', '_blank');
}

document.addEventListener('DOMContentLoaded', function () {
    const paragrafo = document.getElementById('redirecionar-1');
    paragrafo.addEventListener('click', redirecionar);
});
