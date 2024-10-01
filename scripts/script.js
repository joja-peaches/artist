const starGradient1 = document.getElementById("menu-star-1");
const starGradient2 = document.getElementById("menu-star-2");
const fineArtButton = document.getElementById("fine-art-button");
const commercialButton = document.getElementById("commercial-button");

let angle = 0;

function animateStar1 () {
  angle = (angle + .2) % 360;
  starGradient1.style.background = `linear-gradient(${angle}deg, rgb(245,232,14), rgb(245,0,40))`;
  requestAnimationFrame(animateStar1);
}

function animateStar2 () {
  angle = (angle + .7) % 360;
  starGradient2.style.background = `linear-gradient(${angle}deg, rgb(245,232,14), rgb(245,0,40))`;
  requestAnimationFrame(animateStar2);
}

animateStar1();
animateStar2();

fineArtButton.addEventListener("mouseover", () => {
  starGradient1.classList.remove("menu__star-1");
  starGradient1.classList.add("menu__star-1-blinds");
});

fineArtButton.addEventListener("mouseout", () => {
  starGradient1.classList.remove("menu__star-1-blinds");
  starGradient1.classList.add("menu__star-1");
});

commercialButton.addEventListener("mouseover", () => {
  starGradient2.classList.remove("menu__star-2");
  starGradient2.classList.add("menu__star-2-blinds");
});

commercialButton.addEventListener("mouseout", () => {
  starGradient2.classList.remove("menu__star-2-blinds");
  starGradient2.classList.add("menu__star-2");
});