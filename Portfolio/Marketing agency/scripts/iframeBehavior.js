const servButton = document.querySelectorAll("section#job .prim-button");
const iframeCont = document.querySelector("body");
const iframe = document.createElement("iframe");

iframe.style.position = "fixed";
iframe.style.top = "0";
iframe.style.left = "0";
iframe.style.zIndex = "1";

iframe.style.background = "#EBBAB9";
iframe.width = "100%";
iframe.height = "100%";
iframe.name = "servTour";

for (let i = 0; i < 3; i++) {
  servButton[i].addEventListener("click", () => {
    iframeCont.appendChild(iframe);
  })
}