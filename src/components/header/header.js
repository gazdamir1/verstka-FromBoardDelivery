;(function () {
  const burger = document.getElementById("burger")
  const menu = document.getElementById("bottom")
  const overlay = document.getElementById("overlay")

  if (!burger || !menu) return

  burger.addEventListener("click", () => {
    menu.classList.toggle("active")
    burger.classList.toggle("burger--active")
    overlay.classList.toggle("overlay--active")
  })
})()
