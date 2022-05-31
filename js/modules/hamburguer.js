const containerLinks = document.querySelector("#container-links");
const hamburguer = document.querySelector("#hamburguer");

export default function handleHamburguer() {
  containerLinks.classList.toggle("visible");
  if (containerLinks.classList.contains("visible")) {
    containerLinks.ariaExpanded = "true";
  } else {
    containerLinks.ariaExpanded = "false";
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
  }
}

window.onresize = acessibilidade;

hamburguer.addEventListener("click", handleHamburguer);
