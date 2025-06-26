function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/img/avatar-light.png")
    img.setAttribute(
      "alt",
      "foto de Felipe e sua esposa abraçados e sorrindo vestindo jaquetas jeans azul"
    )
  } else {
    img.setAttribute("src", "./assets/img/avatar.png")
    img.setAttribute(
      "alt",
      "foto da familia de Felipe, sua esposa e sua filha usando roupas claras de batizado em uma igreja"
    )
  }
}
