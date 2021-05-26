import pets from "../Common/allPetsinfo.js";
import {expandArrIn6Times} from "../Common/expandArrayIn6Times.js";
import {sort863} from "../Common/sort863.js";

let fullPetsList = expandArrIn6Times(pets);
fullPetsList = sort863(fullPetsList);

const changePetCard = (cardNumber) => {
  const pet_0 = document.getElementById(`pet_${cardNumber}`);
  pet_0.children[0].src = fullPetsList[cardNumber].img;
  pet_0.children[0].alt = fullPetsList[cardNumber].alt;
  pet_0.children[1].children[0].innerText = fullPetsList[cardNumber].name;
}

const petCards = document.querySelectorAll(".pets__card");
  for (let i = 0; i < petCards.length; i++) {
  changePetCard(i);
}

// handling popup window
const popup__window = document.querySelector('.popup__window');
const popup = document.querySelector('.popup');
const overlay = document.getElementById('overlay');
const popup__button = document.querySelector('.popup__button');
const popup_span_1 = document.querySelector('.popup_span_1');
const popup_span_2 = document.querySelector('.popup_span_2');
const popup_span_3 = document.querySelector('.popup_span_3');
const popup_span_4 = document.querySelector('.popup_span_4');


overlay.addEventListener('mouseover', () => {
    popup__button.classList.add('popup_button_on_overlay_hover');
});

overlay.addEventListener('mouseout', () => {
    popup__button.classList.remove('popup_button_on_overlay_hover');
});


const openPopup = (cardNumber) => {
  popup__window.children[0].src = fullPetsList[cardNumber].img;
  popup__window.children[1].children[0].innerText = fullPetsList[cardNumber].name;
  popup__window.children[1].children[1].innerText = `${fullPetsList[cardNumber].type} - ${fullPetsList[cardNumber].breed}`;
  popup__window.children[1].children[2].innerText = fullPetsList[cardNumber].description;
  popup_span_1.nextSibling.innerText = fullPetsList[cardNumber].age;
  popup_span_2.nextSibling.innerText = fullPetsList[cardNumber].inoculations;
  popup_span_3.nextSibling.innerText = fullPetsList[cardNumber].diseases;
  popup_span_4.nextSibling.innerText = fullPetsList[cardNumber].parasites;

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
