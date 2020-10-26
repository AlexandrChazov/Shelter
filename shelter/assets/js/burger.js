const burger = document.querySelector('.hamburger__menu'),
     sidebar = document.querySelector('.sidebar2'),
        logo = document.querySelector('.logo'),
       logo2 = document.querySelector('.logo2'),
        main = document.querySelector('main');

burger.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar__change');
    burger.classList.toggle('burger__change');
    logo.classList.toggle('logo__change');

    overlay.classList.toggle('dark');
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('dark');
    sidebar.classList.remove('sidebar__change');
    burger.classList.remove('burger__change');
    logo.classList.remove('logo__change');
});

logo.addEventListener('click', () => {
    window.open("../../pages/main/main.html","_self")
});

logo2.addEventListener('click', () => {
    window.open("../../pages/main/main.html","_self")
})