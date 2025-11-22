let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x'); 
    navbar.classList.remove('active');
}

// typing text code 

const typed = new Typed('.multiple-text', {
      strings: ['Physcal Fitness', 'Weight Gain', 'Strength Training', 'Muscel Buid', 'Fat Loss', 'body Build', 'Running', '30 Days Challanges', 'Boxing'],
      typeSpeed: 50,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });

