document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.sig-slide');
    let currentSlide = 0;
    slides[currentSlide].classList.add('active');
    let slideInterval = setInterval(nextSlide, 3000); 

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
});

const memberCountVal=document.querySelector(".memberCountVal");
const memberFormBtn=document.querySelector(".memberForm");
memberFormBtn.addEventListener("click",()=>{
    let memberval=parseInt(memberCountVal.innerText);
    memberval++;
    localStorage.setItem('memberIncreaseVal',memberval);
    memberCountVal.innerText=memberval;   
})
window.onload=()=>{
    const memberCountVal=document.querySelector(".memberCountVal");
    memberCountVal.innerText=localStorage.getItem('memberIncreaseVal');
}