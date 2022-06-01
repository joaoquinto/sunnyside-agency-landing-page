const containerLinks = document.querySelector("#container-links");
const hamburguer = document.querySelector("#hamburguer");
const titleWeAre = document.querySelector('.title-we-are')

export default function handleHamburguer() {
  containerLinks.classList.toggle("visible");
  if (containerLinks.classList.contains("visible")) {
    containerLinks.ariaExpanded = "true";
    titleWeAre.classList.add('invisible')
  } else {
    containerLinks.ariaExpanded = "false";
    titleWeAre.classList.remove('invisible')
  }
}

export function acessibilidade() {
  const mediaMatch = matchMedia("(max-width: 799px)").matches;
  if (mediaMatch) {
    containerLinks.ariaOrientation = "vertical";
    hamburguer.ariaHidden = "false";
  } else {
    containerLinks.ariaOrientation = "horizontal";
    hamburguer.ariaHidden = "true";
    titleWeAre.classList.remove('invisible')
  }
}

window.onresize = acessibilidade;

hamburguer.addEventListener("click", handleHamburguer);
