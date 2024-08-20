const addProductBtn = document.getElementById("addProduct");
addProductBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    const dataobj = {
        name: document.getElementById("name").value,
        discription: document.getElementById("description").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
        stock: document.getElementById("stock").value,
        image: document.getElementById("image").value,
    }
    let url = '/Backend/mysqlcode/addproduct.php';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(dataobj).toString()
    })
        .then(response => response.json())
        .then(responseData => {
            if (responseData.msg === "success") {
                location.reload();
            }
            console.log(responseData)
        })
        .catch(error => {
            console.error('Error:', error);
        });
})