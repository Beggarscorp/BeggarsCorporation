window.addEventListener("DOMContentLoaded", () => {
    const detailpageDiv = document.getElementById("detailPage-data");
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('newsId');
    let image = urlParams.get('image');
    let title = urlParams.get('title');
    let dis = urlParams.get('dis');
    let newsDetailPageHTML = "";
console.log(image);
    if (id != " ") {
        newsDetailPageHTML = `<div class="row">
                    <div class="col-sm-12">
                        <div class="imgae">
                            <img src=${image} alt="">
                        </div>
                        <div class="content">
                            <h2>${title}</h2>
                            <p>${dis}</p>
                        </div>
                    </div>
                    </div>`;
                    detailpageDiv.innerHTML=newsDetailPageHTML;
    }
    else {
        null;
    }

})
