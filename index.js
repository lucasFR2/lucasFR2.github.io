document.addEventListener('DOMContentLoaded', function() {
    const text = "LukeCode";
    const defaultTitle = "Portfólio";
    let index = 0;
    let currentTitle = '';
    let isErasing = false;

    function typeTitle() {
        if (!isErasing) {
            if (index < text.length) {
                currentTitle += text.charAt(index);
                document.title = currentTitle;
                index++;
                setTimeout(typeTitle, 150); // Ajuste a velocidade da digitação
            } else {
                isErasing = true;
                setTimeout(eraseTitle, 2000); // Tempo antes de começar o apagamento
            }
        }
    }

    function eraseTitle() {
        if (currentTitle.length > 0) {
            currentTitle = currentTitle.slice(0, -1);
            document.title = currentTitle;
            setTimeout(eraseTitle, 100); // Ajuste a velocidade do apagamento
        } else {
            // Define um título padrão brevemente antes de reiniciar a digitação
            document.title = defaultTitle;
            setTimeout(() => {
                index = 0;
                isErasing = false;
                setTimeout(typeTitle, 500); // Tempo de pausa antes de recomeçar a digitação
            }, 1000); // Tempo do título padrão
        }
    }

    typeTitle();
});
