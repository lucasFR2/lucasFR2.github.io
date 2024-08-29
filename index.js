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
                setTimeout(typeTitle, 150);
            } else {
                isErasing = true;
                setTimeout(eraseTitle, 2000);
            }
        }
    }

    function eraseTitle() {
        if (currentTitle.length > 0) {
            currentTitle = currentTitle.slice(0, -1);
            document.title = currentTitle;
            setTimeout(eraseTitle, 100);
        } else {
            document.title = defaultTitle;
            setTimeout(() => {
                index = 0;
                isErasing = false;
                setTimeout(typeTitle, 500); 
            }, 1000); 
        }
    }

    typeTitle();
});
