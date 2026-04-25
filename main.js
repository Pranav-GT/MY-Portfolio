/*--------- toggle icon ----------*/

let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    if (menuIcon.classList.contains('ri-menu-line')) {
        menuIcon.classList.remove('ri-menu-line');
        menuIcon.classList.add('ri-close-line');
    } else {
        menuIcon.classList.remove('ri-close-line');
        menuIcon.classList.add('ri-menu-line');
    }
    navbar.classList.toggle('active');
};

/*--------- scroll active link ----------*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) activeLink.classList.add('active');
            });
        }
    });

    /*--------- sticky navbar ----------*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*--------- remove toggle icon and navbar on scroll ----------*/
    menuIcon.classList.remove('ri-close-line');
    menuIcon.classList.add('ri-menu-line');
    navbar.classList.remove('active');
};

/*--------- scroll reveal ----------*/

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home_content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home_image, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home_content h1', { origin: 'left' });
ScrollReveal().reveal('.home_content p, .about_content', { origin: 'right' });
ScrollReveal().reveal('.project_card', {
    origin: 'bottom',
    interval: 500,
});


/*--------- typed js ----------*/

const typed = new Typed('.multiple_text', {
    strings: ['Frontend Developer', 'Game Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/*--------- tab switching ----------*/

function showTab(tab, btn) {
    document.querySelectorAll('.tab_content').forEach(el => {
        el.style.setProperty('display', 'none', 'important');
        el.style.visibility = 'visible';
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    document.querySelectorAll('.tab_btn').forEach(el => el.classList.remove('active'));
    const active = document.getElementById('tab_' + tab);
    active.style.setProperty('display', 'grid', 'important');
    active.style.visibility = 'visible';
    active.style.opacity = '1';
    active.style.transform = 'none';
    btn.classList.add('active');
}