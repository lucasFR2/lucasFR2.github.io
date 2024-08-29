document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.title;
    const text = "Code";
    let index = 0;
    let currentTitle = '';

    function typeTitle() {
        if (index < text.length) {
            currentTitle += text.charAt(index);
            document.title = currentTitle;
            index++;
            setTimeout(typeTitle, 100); 
        } else {
            setTimeout(() => {
                currentTitle = '';
                index = 0;
                function eraseTitle() {
                    if (index < text.length) {
                        currentTitle = currentTitle.slice(0, -1);
                        document.title = currentTitle;
                        index++;
                        setTimeout(eraseTitle, 50);
                    } else {
                        setTimeout(typeTitle, 1000); 
                    }
                }
                eraseTitle();
            }, 2000);
        }
    }

    typeTitle();
});
