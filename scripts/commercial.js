// Commerical page

const igButton = document.querySelector(".comm-nav__social-icon-ig");
const linkedinButton = document.querySelector(".comm-nav__social-icon-linkedin");
const redIgButton = './images/icons/red-instagram-logo.png';
const whiteIgButton = './images/icons/white-instagram-logo.png';
const redLinkedinButton = './images/icons/red-linkedin-logo.png';
const whiteLinkedinButton = './images/icons/white-linkedin-logo.png';

igButton.addEventListener("mouseover", () => {
  igButton.src = redIgButton;
});

igButton.addEventListener("mouseout", () => {
  igButton.src = whiteIgButton;
});

linkedinButton.addEventListener("mouseover", () => {
  linkedinButton.src = redLinkedinButton;
});

linkedinButton.addEventListener("mouseout", () => {
  linkedinButton.src = whiteLinkedinButton;
});