const burger = document.querySelector('.hamburger__menu'),
     sidebar = document.querySelector('.sidebar2'),
        logo = document.querySelector('.logo'),
       logo2 = document.querySelector('.logo2'),
        main = document.querySelector('main'),
          el = document.getElementsByTagName('body'),
burger_lines = document.querySelectorAll('.line');

scroll_off = () => {
    if (el[0].style.overflow !== 'hidden') {
        el[0].style.overflow = 'hidden';
    } else {
        el[0].style.overflow = '';
    }
};          

burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar__change');
    burger.classList.toggle('burger__change');
    logo.classList.toggle('logo__change');
    burger_lines[0].classList.toggle('line_white');
    burger_lines[1].classList.toggle('line_white');
    burger_lines[2].classList.toggle('line_white');
    
    scroll_off();
    overlay.classList.toggle('dark');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('dark');
    sidebar.classList.remove('sidebar__change');
    burger.classList.remove('burger__change');
    logo.classList.remove('logo__change');
    burger_lines[0].classList.toggle('line_white');
    burger_lines[1].classList.toggle('line_white');
    burger_lines[2].classList.toggle('line_white');

    popup.classList.add('popup__hide');
    
    scroll_off();
});

logo.addEventListener('click', () => {
    window.open("index.html","_self")
});

logo2.addEventListener('click', () => {
    window.open("index.html","_self")
})