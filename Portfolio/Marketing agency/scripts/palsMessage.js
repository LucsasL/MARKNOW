const msgCont = document.querySelector(".testimTxt");
const arrowBut = document
  .querySelectorAll(".arrow")
  .addEventListener("click", () => {
    msgCont.style.left = "-100%";
  });