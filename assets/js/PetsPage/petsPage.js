import pets from "../Common/allPetsinfo.js";
import {sort863} from "../Common/sort863.js";
import {expandArrIn6Times} from "../Common/expandArrayIn6Times.js";
import {changeAllPetsCards} from "./changeAllPetsCards.js";

let page_Number_Value = 1;
const petCards = document.querySelectorAll(".pets__card");

// petsRandom --------------------------------------------------------------------------
// petsRandom --------------------------------------------------------------------------

let fullPetsList = expandArrIn6Times(pets);
fullPetsList = sort863(fullPetsList);

changeAllPetsCards(petCards, fullPetsList, page_Number_Value);

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------


//--ModalWindow---------------------------------------------------------------------------------------------------
//--ModalWindow---------------------------------------------------------------------------------------------------

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
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------


//-----Pagination------------------------------------------------------------------------------------------------
//-----Pagination------------------------------------------------------------------------------------------------
const first_Page = document.querySelector('.main__paginations').children[0];
const prev_Page = document.querySelector('.main__paginations').children[1];
const page_Number = document.querySelector('.main__paginations').children[2];
const next_page = document.querySelector('.main__paginations').children[3];
const last_Page = document.querySelector('.main__paginations').children[4];
let max_Page_Number = 16;

if (window.innerWidth >= 1280) {
    max_Page_Number = 6;
} else if (window.innerWidth >= 768) {
    max_Page_Number = 8;
}

first_Page.addEventListener('click', () => {
    first_Page.setAttribute("disabled","true");
    prev_Page.setAttribute("disabled","true");
    next_page.removeAttribute("disabled");
    last_Page.removeAttribute("disabled");
    page_Number_Value = 1;
    page_Number.innerText = page_Number_Value;

    changeAllPetsCards(petCards, fullPetsList, page_Number_Value);
});

prev_Page.addEventListener('click', () => {
    next_page.removeAttribute("disabled");
    last_Page.removeAttribute("disabled");

    if (page_Number_Value > 1) {
        page_Number_Value--
    }
    if (page_Number_Value === 1) {
        prev_Page.setAttribute("disabled","true");
        first_Page.setAttribute("disabled","true");
    }

    page_Number.innerText = page_Number_Value;

    changeAllPetsCards(petCards, fullPetsList, page_Number_Value);
});

next_page.addEventListener('click', () => {
    prev_Page.removeAttribute("disabled");
    first_Page.removeAttribute("disabled");

    if (page_Number_Value < max_Page_Number) {
        page_Number_Value++
    }
    if (page_Number_Value === max_Page_Number) {
        next_page.setAttribute("disabled","true");
        last_Page.setAttribute("disabled","true");
    }

    page_Number.innerText = page_Number_Value;
    changeAllPetsCards(petCards, fullPetsList, page_Number_Value);
});

last_Page.addEventListener('click', () => {
    page_Number_Value = max_Page_Number;
    page_Number.innerText = max_Page_Number;


    first_Page.removeAttribute("disabled");
    prev_Page.removeAttribute("disabled");
    next_page.setAttribute("disabled","true");
    last_Page.setAttribute("disabled","true");

    changeAllPetsCards(petCards, fullPetsList, page_Number_Value);
});


//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
