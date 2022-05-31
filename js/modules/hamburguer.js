const containerLinks = document.querySelector("#container-links")
const hamburguer = document.querySelector("#hamburguer")

export default function handleHamburguer() {
  containerLinks.classList.toggle("visible")
}

hamburguer.addEventListener('click', handleHamburguer)