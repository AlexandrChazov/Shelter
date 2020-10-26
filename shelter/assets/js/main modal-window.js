let popup__window = document.querySelector('.popup__window'),
    popup = document.querySelector('.popup'),
    overlay = document.getElementById('overlay'),
    popup__button = document.querySelector('.popup__button'),
    popup_span_1 = document.querySelector('.popup_span_1'),
    popup_span_2 = document.querySelector('.popup_span_2'),
    popup_span_3 = document.querySelector('.popup_span_3'),
    popup_span_4 = document.querySelector('.popup_span_4');


overlay.addEventListener('mouseover', () => {
    popup__button.classList.add('popup_button_on_overlay_hover');
});

overlay.addEventListener('mouseout', () => {
    popup__button.classList.remove('popup_button_on_overlay_hover');
});
    
pet_0.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[0].img;
    popup__window.children[1].children[0].innerText = fullPetsList[0].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[0].type} - ${fullPetsList[0].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[0].description;
    popup_span_1.nextSibling.innerText = fullPetsList[0].age;
    popup_span_2.nextSibling.innerText = fullPetsList[0].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[0].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[0].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

pet_1.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[1].img;
    popup__window.children[1].children[0].innerText = fullPetsList[1].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[1].type} - ${fullPetsList[1].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[1].description;
    popup_span_1.nextSibling.innerText = fullPetsList[1].age;
    popup_span_2.nextSibling.innerText = fullPetsList[1].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[1].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[1].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

pet_2.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[2].img;
    popup__window.children[1].children[0].innerText = fullPetsList[2].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[2].type} - ${fullPetsList[2].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[2].description;
    popup_span_1.nextSibling.innerText = fullPetsList[2].age;
    popup_span_2.nextSibling.innerText = fullPetsList[2].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[2].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[2].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

popup__button.addEventListener('click', () => {
    overlay.classList.remove('dark');
    popup.classList.add('popup__hide');
    scroll_off();
});



