// const login=()=>{
//     function isValidGmail(email) {
//         // Regex pattern for @gmail.com email
//         const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//         return regex.test(email);
//     }

//     let email=document.getElementById("email").value;
//     let password=document.getElementById("password").value;
//     let confirm_password=document.getElementById("confirm-password").value;
//     if(email !== "" && password == confirm_password && isValidGmail(email))
//     {
//         let data={
//             email:email,
//             password:password
//         }
//         let url="/Backend/mysqlcode/login.php";
//         fetch(url,{
//             method: 'POST',
//             headers: {
//              'Content-Type': 'application/x-www-form-urlencoded' 
//          },
//          body: new URLSearchParams(data).toString()
//         })
//         .then(response=>response.json())
//         .then(responseData=>{
//             if(responseData.bool == true)
//             {
//                 console.log(responseData);  
//                 window.location.href="/Backend/welcome";
//             }
//             else
//             {
//                 alert(responseData.msg);
//                 window.location.href="/Backend/login";
//             }
//         })
//     }
//     else
//     {
//         alert("Something are wrong");
//     }
// }