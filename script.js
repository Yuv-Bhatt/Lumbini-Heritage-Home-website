const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false,
    prevPageX, prevScrollLeft;




const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    })
});
const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();

}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);


const text = document.querySelector(".text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "नमस्कार";
    }, 0);
    setTimeout(() => {
        text.textContent = "Witamy";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Welcome";
    }, 8000);
    setTimeout(() => {
        text.textContent = "환영";
    }, 12000);
    setTimeout(() => {
        text.textContent = "Fàilte";
    }, 16000);
    setTimeout(() => {
        text.textContent = "Vítejte";
    }, 20000);
    setTimeout(() => {
        text.textContent = "bienvenu";
    }, 24000);
    setTimeout(() => {
        text.textContent = "Yassas";
    }, 28000);
}

textLoad();
setInterval(textLoad, 32000);

let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = document.querySelectorAll(".wrapper .left > div").length - 1;

slider.querySelector(".controls .up").addEventListener("click", function() {
    if (currentSlide == 0) {
        return;
    }
    currentSlide--;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide)*-100}vh`;

})
slider.querySelector(".controls .down").addEventListener("click", function() {
    if (currentSlide == totalSlides) {
        return;
    }
    currentSlide++;
    slider.querySelector(".wrapper .left div").style.marginTop = `${currentSlide*-100}vh`;
    slider.querySelector(".wrapper .right div").style.marginTop = `${(totalSlides - currentSlide)*-100}vh`;

})
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
});