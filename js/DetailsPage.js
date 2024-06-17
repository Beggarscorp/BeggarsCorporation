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



window.addEventListener("DOMContentLoaded", () => {
    const detailpageDiv = document.getElementById("detailPage-data");
    let urlParams = new URLSearchParams(window.location.search);
    let newsid = urlParams.get('newsId');
    let articleid = urlParams.get('articleId');
    let newsDetailPageHTML = "";

    if (newsid != " " && articleid === null) {
        for (const i of newsObj) {
           if(i.id == newsid)
            {
                newsDetailPageHTML = `<div class="row">
                <div class="col-sm-12">
                    <div class="imgae">
                        <img src=${i.image} alt="" style="aspect-ratio:3;object-fit:contain;">
                    </div>
                    <div class="content">
                        <h2>${i.title}</h2>
                        <p>${i.dis}</p>
                    </div>
                </div>
                </div>`;
                detailpageDiv.innerHTML+=newsDetailPageHTML;

            }
        
        }
    }
    else if (articleid != " " && newsid === null)
        {
            for (const i of aritcleObj) {
                if(i.id == articleid)
                 {
                     newsDetailPageHTML = `<div class="row">
                     <div class="col-sm-12">
                         <div class="imgae">
                             <img src=${i.image} alt="" style="aspect-ratio:3;object-fit:contain;">
                         </div>
                         <div class="content">
                             <h2>${i.title}</h2>
                             <p>${i.dis}</p>
                         </div>
                     </div>
                     </div>`;
                     detailpageDiv.innerHTML+=newsDetailPageHTML;
     
                 }
             
             }
        }
    else 
    {
        null;
    }

})