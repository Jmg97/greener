//  슬라이드 효과 // 닷 버튼 클릭 시 모양 변경


let btnOne = document.querySelector(".btn1");
let btnTwo = document.querySelector(".btn2");
let btnThree = document.querySelector(".btn3");
const banner = document.querySelector(".image-main-box");
const dot = document.querySelector(".dot")

function oneSlide(){
    banner.style.transform = "translateX(0%)";
     btnOne.classList.add("btn-click");
     btnTwo.classList.remove("btn-click");
     btnThree.classList.remove("btn-click");     
    }
function twoSlide(){
    banner.style.transform = "translateX(-33.33%)";
    btnOne.classList.remove("btn-click");
    btnTwo.classList.add("btn-click");
    btnThree.classList.remove("btn-click");  
}

function threeSlide(){
    banner.style.transform = "translateX(-66.66%)";
    btnOne.classList.remove("btn-click");
    btnTwo.classList.remove("btn-click");
    btnThree.classList.add("btn-click");  
}

btnOne.addEventListener("click", oneSlide);
btnTwo.addEventListener("click", twoSlide);
btnThree.addEventListener("click", threeSlide);



