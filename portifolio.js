const itens = document.querySelectorAll('.copy');

itens.forEach(item => {
    item.addEventListener('click', () => {
        const texto = item.innerText;

        navigator.clipboard.writeText(texto).then(() => {
            item.classList.add('copiado');
            item.innerText = "Copiado! ✔";

            setTimeout(() => {
                item.classList.remove('copiado');
                item.innerText = texto;
            }, 1200);
        });
    });
});

