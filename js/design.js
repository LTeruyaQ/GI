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

function projectVisibility(text){

    if(text == 1){
        document.getElementById("projectGen").style.visibility = "visible";
        document.getElementById("projectVert").style.visibility = "hidden";
        document.getElementById("projectRobot").style.visibility = "hidden";
    }


    if(text == 2){
        document.getElementById("projectGen").style.visibility = "hidden";
        document.getElementById("projectVert").style.visibility = "visible";
        document.getElementById("projectRobot").style.visibility = "hidden";
    }


    if(text == 3){
        document.getElementById("projectGen").style.visibility = "hidden";
        document.getElementById("projectVert").style.visibility = "hidden";
        document.getElementById("projectRobot").style.visibility = "visible";
    }

    document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});;
}