//An empty Array for my images
var images = [];
var timer;
// image list
images[0] = "images/about-img.jpg";
images[1] = "images/slider-01.jpg";
images[2] = "images/slider-02.jpg";
images[3] = "images/slider-03.jpg";
images[4] = "images/slider-04.jpg";

imageIndex = 0;


function changeImage() {

    document.getElementById("slider").src =  images[imageIndex]; 

    if(imageIndex < images.length){
        imageIndex++;
    } else {
        imageIndex = 0;
    }
    timer = setTimeout("changeImage()", 2500);
}

function stopShow() {
    clearTimeout(timer);
}

function runShow() {
    changeImage();
}
window.onload = runShow;