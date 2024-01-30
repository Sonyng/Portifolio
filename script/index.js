let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

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
            document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let menuIcon = document.getElementById('menu_icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        // Alternar a classe 'responsive-navbar' na barra de navegação
        navbar.classList.toggle('responsive-navbar');
    });
});

