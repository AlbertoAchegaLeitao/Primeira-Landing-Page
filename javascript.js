//! Hamburguer Menu
// Variavéis
const toggleButton = document.getElementById("togglebutton");
const navbarMenu = document.getElementById("navbarmenu");
const menuItem1 = document.getElementById("menuitem1");
const menuItem2 = document.getElementById("menuitem2");
const menuItem3 = document.getElementById("menuitem3");
const menuItem4 = document.getElementById("menuitem4");
const menuItem5 = document.getElementById("menuitem5");
const menuItem6 = document.getElementById("menuitem6");

// Funções
toggleButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

menuItem1.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
menuItem2.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
menuItem3.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
menuItem4.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
menuItem5.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});
menuItem6.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// MODAL
const getModal = document.getElementById("get-modal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

getModal.addEventListener("click", () => {
  modal.classList.toggle("active");
});

closeModal.addEventListener("click", () => {
  modal.classList.toggle("active");
});
//!API
/*const quoteElement = document.querySelector(".quotes__wrapper");
fetch("quotes.json")
  .then((response) => response.json())
  .then((quotes) => {
    const divElem = document.createElement("div");
    divElem.classList.add("search-list-item");
    divElem.innerHTML = `
            <div> ${quotes[0].quote} </div>
            <p>${quotes[0].name}</p>`;

    quoteElement.append(divElem);*/
    /*  quotes.forEach((quote) => {
      const divElem = document.createElement("div");
      divElem.classList.add("search-list-item");
      divElem.innerHTML = `
            <div "${quote.quote[0]}> </div>
            <p>${quote.name[0]}</p>`;

      quoteElement.append(divElem); */
    /*  }); */
  });
