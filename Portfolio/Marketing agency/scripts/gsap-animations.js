const giantTextLeft1 = document.querySelector("#left1");
const giantTextLeft2 = document.querySelector("#left2");

const giantTextRight1 = document.querySelector("#right1");
const giantTextRight2 = document.querySelector("#right1");

const windows = document.querySelector(".window");

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);

//     if (entry.isIntersecting) {
//       giant.to()
//     } else {
//       entry.target.classList.remove("longShadow");
//     }
//   });
// });

gsap.to(".window", {
  scale: 1,
  duration: 4,
  ease: "ease-in-out"
})

gsap.to("#left1", {
  x: 800,
  duration: 5,
});

gsap.to("#left2", {
  x: 800,
  duration: 5,
});

gsap.to("#right1", {
  x: -800,
  duration: 5,
});

gsap.to("#right2", {
  x: -800,
  duration: 5,
});