// CardSlider class definition
class CardSlider {
    constructor(sliderContainerId) {
        this.sliderContainer = document.getElementById(sliderContainerId);
        this.cardsWrapper = this.sliderContainer.querySelector('.cards-wrapper');
        this.cards = this.cardsWrapper.querySelectorAll('.card');
        this.leftButton = this.sliderContainer.querySelector('.left-button');
        this.rightButton = this.sliderContainer.querySelector('.right-button');
        this.currentIndex = 0;

        this.leftButton.addEventListener('click', () => this.slideCards(-1));
        this.rightButton.addEventListener('click', () => this.slideCards(1));
    }

    slideCards(direction) {
        const cardWidth = this.cards[0].offsetWidth + 20; // Adjust 20px margin
        const maxIndex = this.cards.length - 1;
        this.currentIndex = this.currentIndex + direction;

        // Ensure currentIndex stays within bounds
        if (this.currentIndex < 0) {
            this.currentIndex = 0;
        } else if (this.currentIndex > maxIndex) {
            this.currentIndex = maxIndex;
        }

        // Calculate new position for cardsWrapper
        const newPosition = -1 * this.currentIndex * cardWidth;
        this.cardsWrapper.style.transform = `translateX(${newPosition}px)`;
    }
}

// Instantiate multiple sliders
const slider1 = new CardSlider('slider1');
const slider2 = new CardSlider('slider2');
const slider3 = new CardSlider('slider3');

const product_card_img=document.querySelectorAll(".product-card .img");
const pro_left=document.querySelector(".product-prev");
const pro_next=document.querySelector(".product-next");
let count=0;
pro_next.addEventListener("click",()=>{
    let lenofImg=product_card_img.length-2;
    if(count <= lenofImg )
        {
            product_card_img[count].classList.remove("product-active");
            count++;
            product_show();
        }
  
});
pro_left.addEventListener("click",()=>{
   if(count > 0)
    {
        product_card_img[count].classList.remove("product-active");
        count--;
        product_show();
    }
});

const product_show=()=>{
    product_card_img[count].classList.add("product-active");
};
window.addEventListener("load",()=>{
    product_card_img[count].classList.add("product-active");
    setInterval(()=>{
        let lenofImg=product_card_img.length-2;
        if(count <= lenofImg )
            {
                product_card_img[count].classList.remove("product-active");
                count++;
                product_show();
            }
            else
            {
                product_card_img[count].classList.remove("product-active");
                count=0;
                product_card_img[count].classList.add("product-active");
            }

    },3000)
});