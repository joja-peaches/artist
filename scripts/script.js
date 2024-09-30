const starGradient1 = document.getElementById("menu-star-1");
const starGradient2 = document.getElementById("menu-star-2");

let angle = 0;

function animateStar1 () {
  angle = (angle + 1) % 360;
  starGradient1.style.background = `linear-gradient(${angle}deg, rgb(245,232,14), rgb(233,86,9))`;
  requestAnimationFrame(animateStar1);
}

function animateStar2 () {
  angle = (angle + 1) % 360;
  starGradient2.style.background = `linear-gradient(${angle}deg, rgb(245,232,14), rgb(233,86,9))`;
  requestAnimationFrame(animateStar2);
}

animateStar1();
animateStar2();