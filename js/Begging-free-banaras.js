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
    memberCountVal.innerText=member;   
});
window.onload=()=>{
    const memberCountVal=document.querySelector(".memberCountVal");
    memberCountVal.innerText=localStorage.getItem('memberIncreaseVal');
};


const aritcleObj=[
   {
    id:1,
    title:"Lorem ipsum dolor sit amet1",
    image:"images/main/timesofindia.jpg",
    dis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cum tempora consectetur maiores quo praesentium dolore sit suscipit? Dolorem, deserunt!"
   },
   {
    id:2,
    title:"Lorem ipsum dolor sit amet2",
    image:"images/main/timesofindia.jpg",
    dis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cum tempora consectetur maiores quo praesentium dolore sit suscipit? Dolorem, deserunt!"
   }
];

document.addEventListener("DOMContentLoaded",()=>{
    let divarticleElement=document.getElementById("aritcle-data");
    for (const key in aritcleObj) {
        let articleHTML=`<div class="col-sm-6" style="padding: 6px;">
                           <div style="border: 2px solid #a55605; border-radius: 5px;padding: 5px;">
                               <img src=${aritcleObj[key].image} alt="">
                               <h4 class="text-dark" style="font-weight: 700;">${aritcleObj[key].title}</h4>
                               <p style="font-size: smaller;color: black;">${aritcleObj[key].dis}</p>
                               <a href="DetailsPage.html?articleId=${aritcleObj[key].id}&image=${aritcleObj[key].image}&title=${aritcleObj[key].title}&dis=${aritcleObj[key].dis}" target="_blank" rel="noopener noreferrer"><button
                                   style="background-color: #a55605;color: white;border: none;outline: none;padding: 3px 10px;border-radius: 5px; font-size: small;margin: 10px 0;">See
                                   more</button></a>
                           </div>
                       </div>`;
        divarticleElement.innerHTML+=articleHTML;
   }
});


const newsObj=[
    {
     id:1,
     title:"Lorem ipsum dolor sit amet1",
     image:"images/MemplateImg/bc.jpg",
     dis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cum tempora consectetur maiores quo praesentium dolore sit suscipit? Dolorem, deserunt!"
    },
    {
     id:2,
     title:"Lorem ipsum dolor sit amet2",
     image:"images/MemplateImg/bc.jpg",
     dis:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cum tempora consectetur maiores quo praesentium dolore sit suscipit? Dolorem, deserunt!"
    }
 ];

document.addEventListener("DOMContentLoaded",()=>{
    let divnewsElement=document.getElementById("news-data");
    for (const key in newsObj) {
        let newsHTML=`<div class="row" style="margin-bottom: 20px;"> 
        <div class="col-sm-3">
                <img src=${newsObj[key].image} alt=""
                    style="border: 2px solid #a55605;border-radius: 5px;padding: 1px;">
            </div>
            <div class="col-sm-9">
                <h4 class="text-dark" style="font-weight: 700;">${newsObj[key].title}</h4>
                <p class="text-dark" style="font-size:smaller;">${newsObj[key].dis}</p>
                <a href="DetailsPage.html?newsId=${newsObj[key].id}&image=${newsObj[key].image}&title=${newsObj[key].title}&dis=${newsObj[key].dis}" target="_blank" rel="noopener noreferrer"><button
                    style="background-color: #a55605;color: white;border: none;outline: none;padding: 3px 10px;border-radius: 5px; font-size: small;margin: 10px 0;">Read
                    more</button></a>
            </div>
            </div>`;
        divnewsElement.innerHTML+=newsHTML;
   }
});
