

/* Rotating icon*/

let icon = document.getElementById('main__rectangle');

icon.addEventListener('click', rotate);

let rotation = 0;

function rotate(){
    rotation += 360;
    console.log('no i co')
    icon.style.transform = `rotate(${rotation}deg)`;
};


/* Mobile menu toggler */

const mobileNavbar = document.getElementById('nav-bar');
const hamburgerIcon = document.getElementById('hamburger__icon');
const closeIcon = document.getElementById('close_icon');

hamburgerIcon.addEventListener('click',openMenu);
closeIcon.addEventListener('click',closeMenu);

function openMenu(){
    mobileNavbar.style.transform = 'translateX(0%)';
};

function closeMenu(){
    mobileNavbar.style.transform = 'translateX(100%)';
};