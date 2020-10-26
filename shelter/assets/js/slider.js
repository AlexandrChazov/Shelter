let left_arrow = document.querySelector('slider__button'),
right_arrow = document.querySelector('slider__button__reverted');

left_arrow.addEventListener('click', () => {
    pet_0.children[0].src = fullPetsList[0].img;
    pet_0.children[0].alt = fullPetsList[0].alt;
    pet_0.children[1].children[0].innerText = fullPetsList[0].name;

    pet_1.children[0].src = fullPetsList[1].img;
    pet_1.children[0].alt = fullPetsList[1].alt;
    pet_1.children[1].children[0].innerText = fullPetsList[1].name;

    pet_2.children[0].src = fullPetsList[2].img;
    pet_2.children[0].alt = fullPetsList[2].alt;
    pet_2.children[1].children[0].innerText = fullPetsList[2].name;
});