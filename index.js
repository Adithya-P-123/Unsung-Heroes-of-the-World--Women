function openNav() {
    document.getElementById('sidenav').style.width = "25%";
    document.getElementById('body').style.marginLeft = "250px";
    document.getElementById('sidenav').style.backgroundColor = "rgba(0,0,0,0.9)";
    document.getElementById('sidenav').style.height = "60%"
}

function closeNav() {
    document.getElementById('sidenav').style.width = "0px";
    document.getElementById('body').style.marginLeft = "0px";
}
var slideIndex = 1;
showSlides(slideIndex)

function addSlides(n) {
    showSlides(slideIndex += n)
}

function current(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
var slideIndex = 1;
showSlides(slideIndex)

function addSlides(n) {
    showSlides(slideIndex += n)
}

function current(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}