document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar a');
    let menuIcon = document.getElementById('menu_icon');
    let navbar = document.querySelector('.navbar');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                document.querySelector('.navbar a[href*="' + id + '"]').classList.add('active');
            }
        });
    }

    menuIcon.addEventListener('click', function (e) {
        e.preventDefault();
        navbar.classList.toggle('show');
    });

    // Adiciona o seguinte código para fechar o menu ao clicar em qualquer lugar fora dele
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.navbar') && !event.target.closest('#menu_icon')) {
            navbar.classList.remove('show');
        }
    });

    // Adiciona o seguinte código para fechar o menu ao pressionar a tecla Esc
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && navbar.classList.contains('show')) {
            navbar.classList.remove('show');
        }
    });
});
