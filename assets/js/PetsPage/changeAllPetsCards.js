const changePetCard = (cardNumber, fullPetsList, page_Number) => {
  const pet_0 = document.getElementById(`pet_${cardNumber}`);
  pet_0.children[0].src = fullPetsList[page_Number+cardNumber-1].img;
  pet_0.children[0].alt = fullPetsList[page_Number+cardNumber-1].alt;
  pet_0.children[1].children[0].innerText = fullPetsList[page_Number+cardNumber-1].name;
}

export const changeAllPetsCards = (petCards, fullPetsList, page_Number) => {
  for (let i = 0; i < petCards.length; i++) {
    changePetCard(i, fullPetsList, page_Number);
  }
}
