let first_Page = document.querySelector('.main__paginations').children[0],
    prev_Page = document.querySelector('.main__paginations').children[1],
    page_Number = document.querySelector('.main__paginations').children[2],
    next_page = document.querySelector('.main__paginations').children[3],
    last_Page = document.querySelector('.main__paginations').children[4],
    //page_Number_Value = 1, эта переменная уже объявлена в файле "pets random.js"
    max_Page_Number = 16;
    

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
    
    createPetsCards();
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
    createPetsCards();
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
    createPetsCards();
});

last_Page.addEventListener('click', () => {
    page_Number_Value = max_Page_Number;
    page_Number.innerText = max_Page_Number;
    

    first_Page.removeAttribute("disabled");
    prev_Page.removeAttribute("disabled");
    next_page.setAttribute("disabled","true");
    last_Page.setAttribute("disabled","true");

    createPetsCards();
});

for (let i = 0; i < fullPetsList.length; i++) {
    pet_0 = document.getElementById("pet_0");
    pet_0.children[0].src = fullPetsList[0].img;
    pet_0.children[0].alt = fullPetsList[0].alt;
    pet_0.children[1].children[0].innerText = fullPetsList[0].name;
}