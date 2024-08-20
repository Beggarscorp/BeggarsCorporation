const signup=()=>{  

    function isValidGmail(email) {
        // Regex pattern for @gmail.com email
        const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
        return regex.test(email);
    }
    if(document.getElementById("fname").value !== "" && document.getElementById("lname").value !== "" && document.getElementById("email").value !== "" && document.getElementById("password").value !== "" && isValidGmail(document.getElementById("email").value)) 
    {
        const url = '/Backend/mysqlcode/newuser.php';
        const data = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
    
     fetch(url, {
        method: 'POST',
        headers: {
         'Content-Type': 'application/x-www-form-urlencoded' 
     },
     body: new URLSearchParams(data).toString()
    })
    .then(response => response.json())
    .then(responseData => {
        if(responseData.msg === "success")
        {
            location.reload();
        }
        console.log(responseData)
    })
    .catch(error => {
     console.error('Error:', error);
    });
    }else
    {
        alert("You are missing any field");
    }

 }