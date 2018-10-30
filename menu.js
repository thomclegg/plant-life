const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")


// when I click the toggletag, toggle a class of open on the main mainTag
// if its open make the toggle tag say closed
toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("open")

  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `<img src="./assets/close.svg">Close`
  } else {
    toggleTag.innerHTML = `<img src="./assets/menu.svg">Menu`
  }


})
