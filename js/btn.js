//  슬라이드 효과 // 닷 버튼 클릭 시 모양 변경


let btnOne = document.querySelector(".btn1");
let btnTwo = document.querySelector(".btn2");
let btnThree = document.querySelector(".btn3");
const banner = document.querySelector(".image-main-box");
const dot = document.querySelector(".dot")

let currentSlide = 0;
let timerId=0;
let slides = Array.from(document.querySelectorAll(".image-main-box"));
const offsetTime = 4500;
const duration = 400;





function doSlide() {
    
    currentSlide++;
    currentSlide%=slides.length;
    
    banner.style.marginLeft = "-100%";
    banner.style.transition = duration+"ms";
    window.setTimeout(function(){ 
       banner.appendChild(banner.firstElementChild);
        banner.removeAttribute("style");
    },duration)
}

function repeater() {
    timerId = window.setInterval(doSlide, offsetTime);
   banner.addEventListener("mouseenter",function(){
        window.clearInterval(timerId);
    })
   banner.addEventListener("mouseleave",function(){
        timerId=window.setInterval(doSlide,offsetTime)
    })
}
repeater()



