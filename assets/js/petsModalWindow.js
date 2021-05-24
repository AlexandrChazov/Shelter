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

const openPopup = (cardNumber) => {
  popup__window.children[0].src = fullPetsList[page_Number_Value+cardNumber-1].img;
    popup__window.children[1].children[0].innerText = fullPetsList[page_Number_Value+cardNumber-1].name;
    popup__window.children[1].children[1].innerText = `${fullPetsList[page_Number_Value+cardNumber-1].type} - ${fullPetsList[page_Number_Value+cardNumber-1].breed}`;
    popup__window.children[1].children[2].innerText = fullPetsList[page_Number_Value+cardNumber-1].description;
    popup_span_1.nextSibling.innerText = fullPetsList[page_Number_Value+cardNumber-1].age;
    popup_span_2.nextSibling.innerText = fullPetsList[page_Number_Value+cardNumber-1].inoculations;
    popup_span_3.nextSibling.innerText = fullPetsList[page_Number_Value+cardNumber-1].diseases;
    popup_span_4.nextSibling.innerText = fullPetsList[page_Number_Value+cardNumber-1].parasites;

    overlay.classList.add('dark');
    popup.classList.remove('popup__hide');
    scroll_off();
}

for (let i = 0; i < petCards.length; i++) {
  petCards[i].addEventListener('click', () => {
    openPopup(i)
  });
}

popup__button.addEventListener('click', () => {
    overlay.classList.remove('dark');
    popup.classList.add('popup__hide');
    scroll_off();
});
