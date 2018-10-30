// pick all of the images and layer them based on z-index
const slideArea = document.querySelector("div.slides")
const images = slideArea.querySelectorAll("img")

// keep track of 2 things
let currentSlide = 0
let z = 1

// when I click the slide area change the slide based on z-index
slideArea.addEventListener("click", function() {
  currentSlide = currentSlide + 1
  z = z + 1

  if (currentSlide > images.length - 1) {
    currentSlide = 0
  }

  // remove the animation from the style for every image - this means that every image has animation on a loop
  images.forEach(function (image) {
    image.style.animation = ""
  })

  // pick the current image
  images[currentSlide].style.zIndex = z
  images[currentSlide].style.animation = "fade 0.5s"
})





// when I hover over slide area put all the images in a random places
slideArea.addEventListener("mouseover", function() {
  images.forEach(image => {
    const x = 25 * (Math.floor(Math.random() * 5)) - 50
    const y = 25 * (Math.floor(Math.random() * 5)) - 50

    image.style.transform = `translate(${x}px, ${y}px`

  })
})

// make slides return to the start when mouse off
slideArea.addEventListener("mouseout", function() {
  images.forEach(image => {
    image.style.transform = ""
  })
})
