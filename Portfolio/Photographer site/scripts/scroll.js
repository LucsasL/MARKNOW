document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    headerImg.src = "img/logo.png";

  } else {
    header.classList.remove("scrolled");
    headerImg.src = "img/logo-white.png";

  }
})

const header = document.querySelector("header");
const headerImg = document.querySelector("#headerLogo");