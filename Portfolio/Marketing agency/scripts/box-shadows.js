document.addEventListener("mousemove", (e) => {
  let posX = 0;
  let posY = 0;

  if (e.clientX != posX && e.clientY != posY) {
    posX = e.clientX;
    posY = e.clientY;
  }

})