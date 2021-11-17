let timer = 4000,
currentImageIndex = 0,
images = document
            .querySelectorAll("#slider img")
max = images.length;

function nextImage() {

images[currentImageIndex]
    .classList.remove("selected")

currentImageIndex++

if(currentImageIndex >= max)
    currentImageIndex = 0

images[currentImageIndex]
    .classList.add("selected")
}

function start() {
setInterval(() => {
    // troca de image
    nextImage()
}, timer)
}

window.addEventListener("load", start)