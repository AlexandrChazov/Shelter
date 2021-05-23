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
    popup__window.children[0].src = fullPetsList[page_Number_Value-1].img;
    popup__window.children[1].children[0].innerText = fullPetsList[page_Number_Value-1].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[page_Number_Value-1].type} - ${fullPetsList[page_Number_Value-1].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[page_Number_Value-1].description;
    popup_span_1.nextSibling.innerText = fullPetsList[page_Number_Value-1].age;
    popup_span_2.nextSibling.innerText = fullPetsList[page_Number_Value-1].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[page_Number_Value-1].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[page_Number_Value-1].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

pet_1.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[page_Number_Value].img;
    popup__window.children[1].children[0].innerText = fullPetsList[page_Number_Value].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[page_Number_Value].type} - ${fullPetsList[page_Number_Value].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[page_Number_Value].description;
    popup_span_1.nextSibling.innerText = fullPetsList[page_Number_Value].age;
    popup_span_2.nextSibling.innerText = fullPetsList[page_Number_Value].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[page_Number_Value].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[page_Number_Value].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

pet_2.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[page_Number_Value+1].img;
    popup__window.children[1].children[0].innerText = fullPetsList[page_Number_Value+1].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[page_Number_Value+1].type} - ${fullPetsList[page_Number_Value+1].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[page_Number_Value+1].description;
    popup_span_1.nextSibling.innerText = fullPetsList[page_Number_Value+1].age;
    popup_span_2.nextSibling.innerText = fullPetsList[page_Number_Value+1].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[page_Number_Value+1].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[page_Number_Value+1].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

popup__button.addEventListener('click', () => {
    overlay.classList.remove('dark');
    popup.classList.add('popup__hide');
    scroll_off();
});

pet_3.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[page_Number_Value+2].img;
    popup__window.children[1].children[0].innerText = fullPetsList[page_Number_Value+2].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[page_Number_Value+2].type} - ${fullPetsList[page_Number_Value+2].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[page_Number_Value+2].description;
    popup_span_1.nextSibling.innerText = fullPetsList[page_Number_Value+2].age;
    popup_span_2.nextSibling.innerText = fullPetsList[page_Number_Value+2].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[page_Number_Value+2].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[page_Number_Value+2].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

pet_4.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[page_Number_Value+3].img;
    popup__window.children[1].children[0].innerText = fullPetsList[page_Number_Value+3].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[page_Number_Value+3].type} - ${fullPetsList[page_Number_Value+3].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[page_Number_Value+3].description;
    popup_span_1.nextSibling.innerText = fullPetsList[page_Number_Value+3].age;
    popup_span_2.nextSibling.innerText = fullPetsList[page_Number_Value+3].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[page_Number_Value+3].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[page_Number_Value+3].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

pet_5.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[page_Number_Value+4].img;
    popup__window.children[1].children[0].innerText = fullPetsList[page_Number_Value+4].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[page_Number_Value+4].type} - ${fullPetsList[page_Number_Value+4].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[page_Number_Value+4].description;
    popup_span_1.nextSibling.innerText = fullPetsList[page_Number_Value+4].age;
    popup_span_2.nextSibling.innerText = fullPetsList[page_Number_Value+4].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[page_Number_Value+4].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[page_Number_Value+4].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

pet_6.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[page_Number_Value+5].img;
    popup__window.children[1].children[0].innerText = fullPetsList[page_Number_Value+5].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[page_Number_Value+5].type} - ${fullPetsList[page_Number_Value+5].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[page_Number_Value+5].description;
    popup_span_1.nextSibling.innerText = fullPetsList[page_Number_Value+5].age;
    popup_span_2.nextSibling.innerText = fullPetsList[page_Number_Value+5].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[page_Number_Value+5].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[page_Number_Value+5].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});

pet_7.addEventListener('click', () => {
    popup__window.children[0].src = fullPetsList[page_Number_Value+6].img;
    popup__window.children[1].children[0].innerText = fullPetsList[page_Number_Value+6].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[page_Number_Value+6].type} - ${fullPetsList[page_Number_Value+6].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[page_Number_Value+6].description;
    popup_span_1.nextSibling.innerText = fullPetsList[page_Number_Value+6].age;
    popup_span_2.nextSibling.innerText = fullPetsList[page_Number_Value+6].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[page_Number_Value+6].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[page_Number_Value+6].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
});