const msgCont = document.querySelector(".testimTxt p.center");
const arrowBut = document.querySelectorAll(".arrow");
const msgs = [0, 1, 2, 3];
let msgShown = 0;

arrowBut[0].addEventListener("click", () => {
  msgCont.classList.add(".testimMsgRight");
  
})

arrowBut[1].addEventListener("click", () => {
  msgCont.classList.add(".testimMsgLeft");
});

if (msgShown > 4) {
  msgShown -= msgShown;
}