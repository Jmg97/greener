let btnOne = document.querySelector(".btn-one");
let btnTwo = document.querySelector(".btn-two");
let btnThree = document.querySelector(".btn-three");
const banner = document.querySelector(".banner-box");

function oneSlide(){
    banner.style.transform = "translate(0vw)"
}
function twoSlide(){
    banner.style.transform = "translate(-100vw)"
}

function threeSlide(){
    banner.style.transform = "translate(-200vw)"
}


btnOne.addEventListener("click", oneSlide);
btnTwo.addEventListener("click", twoSlide);
btnThree.addEventListener("click", threeSlide);
