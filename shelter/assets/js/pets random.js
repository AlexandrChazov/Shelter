page_Number_Value = 1;

let pets = [
    {
      "name": "Jennifer",
      "alt": "Jennifer photo",
      "img": "../../assets/images/pets/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "alt": "Sophia photo",
      "img": "../../assets/images/pets/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "alt": "Woody photo",
      "img": "../../assets/images/pets/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "alt": "Scarlett photo",
      "img": "../../assets/images/pets/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "alt": "Katrine photo",
      "img": "../../assets/images/pets/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "alt": "Timmy photo",
      "img": "../../assets/images/pets/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "alt": "Freddie photo",
      "img": "../../assets/images/pets/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "alt": "Charly photo",
      "img": "../../assets/images/pets/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]; // 8


let fullPetsList = []; // 48


  

  fullPetsList = (() => {
    let tempArr = [];

    for (let i = 0; i < 6; i++) {
      const newPets = pets;

      for (let j = pets.length; j > 0; j--) {
        let randInd = Math.floor(Math.random() * j);
        const randElem = newPets.splice(randInd, 1)[0];
        newPets.push(randElem);
      }

      tempArr = [...tempArr, ...newPets];
    }
    return tempArr;
  })();


const sort863 = (list) => {
  let unique8List = [];
  let length = list.length;
  for (let i = 0; i < length / 8; i++) {
    const uniqueStepList = [];
    for (j = 0; j < list.length; j++) {
      if (uniqueStepList.length >= 8) {
        break;
      }
      const isUnique = !uniqueStepList.some((item) => {
        return item.name === list[j].name;
      });
      if (isUnique) {
        uniqueStepList.push(list[j]);
        list.splice(j, 1);
        j--;
      }
    }
    unique8List = [...unique8List, ...uniqueStepList];
  }
  list = unique8List;


  list = sort6recursively(list);

  return list;
}

const sort6recursively = (list) => {
  const length = list.length;

  for (let i = 0; i < (length / 6); i++) {
    const stepList = list.slice(i * 6, (i * 6) + 6);

    for (let j = 0; j < 6; j++) {
      const duplicatedItem = stepList.find((item, ind) => {
        return item.name === stepList[j].name && (ind !== j);
      });

      if (duplicatedItem !== undefined) {
        const ind = (i * 6) + j;
        const which8OfList = Math.trunc(ind / 8);

        list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

        sort6recursively(list);
      }
    }
  }

  return list;
}


fullPetsList = sort863(fullPetsList);



// Изменяем содержание карточек питомцев
createPetsCards = () => {
  let pet_0 = document.getElementById("pet_0");
    pet_0.children[0].src = fullPetsList[page_Number_Value-1].img;
    pet_0.children[0].alt = fullPetsList[page_Number_Value-1].alt;
    pet_0.children[1].children[0].innerText = fullPetsList[page_Number_Value-1].name;

  let pet_1 = document.getElementById("pet_1");
      pet_1.children[0].src = fullPetsList[page_Number_Value].img;
      pet_1.children[0].alt = fullPetsList[page_Number_Value].alt;
      pet_1.children[1].children[0].innerText = fullPetsList[page_Number_Value].name;

  let pet_2 = document.getElementById("pet_2");
      pet_2.children[0].src = fullPetsList[page_Number_Value+1].img;
      pet_2.children[0].alt = fullPetsList[page_Number_Value+1].alt;
      pet_2.children[1].children[0].innerText = fullPetsList[page_Number_Value+1].name;

  let pet_3 = document.getElementById("pet_3");
      pet_3.children[0].src = fullPetsList[page_Number_Value+2].img;
      pet_3.children[0].alt = fullPetsList[page_Number_Value+2].alt;
      pet_3.children[1].children[0].innerText = fullPetsList[page_Number_Value+2].name;

  let pet_4 = document.getElementById("pet_4");
      pet_4.children[0].src = fullPetsList[page_Number_Value+3].img;
      pet_4.children[0].alt = fullPetsList[page_Number_Value+3].alt;
      pet_4.children[1].children[0].innerText = fullPetsList[page_Number_Value+3].name;

  let pet_5 = document.getElementById("pet_5");
      pet_5.children[0].src = fullPetsList[page_Number_Value+4].img;
      pet_5.children[0].alt = fullPetsList[page_Number_Value+4].alt;
      pet_5.children[1].children[0].innerText = fullPetsList[page_Number_Value+4].name;

  let pet_6 = document.getElementById("pet_6");
      pet_6.children[0].src = fullPetsList[page_Number_Value+5].img;
      pet_6.children[0].alt = fullPetsList[page_Number_Value+5].alt;
      pet_6.children[1].children[0].innerText = fullPetsList[page_Number_Value+5].name;

  let pet_7 = document.getElementById("pet_7");
      pet_7.children[0].src = fullPetsList[page_Number_Value+6].img;
      pet_7.children[0].alt = fullPetsList[page_Number_Value+6].alt;
      pet_7.children[1].children[0].innerText = fullPetsList[page_Number_Value+6].name;
}

createPetsCards();

//document.querySelector("body > main > div.pets > div > div > div > div:nth-child(1) > img").src = fullPetsList[0].img