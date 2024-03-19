var timeout;

window.onscroll = function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        var posicionScroll = window.pageYOffset;

        if (posicionScroll > 50) {
            document.querySelector('.redes-sociales').classList.add('oculto');
        } else {
            document.querySelector('.redes-sociales').classList.remove('oculto');
        }
    }, 100);
};
