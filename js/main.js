
var YourEmail = document.getElementById("YourEmail")
var YourPassword = document.getElementById("YourPassword")

let  users = []


if(localStorage.getItem("users") !=null) {
    users = JSON.parse(localStorage.getItem("users"))
    console.log(users);
}




document.getElementById("btnLogin").addEventListener("click",function(){
    login()
})



function login(){
    const user = {
        email:YourEmail.value,
        pass:YourPassword.value,
    }

    if(checkUser())  {
       location.href = './welcome.html'
    }else {
        alert("not valid ")
    }
    
    }


function checkUser() {

    for (let i = 0; i < users.length; i++) {
      if(users[i].email === YourEmail.value && users[i].pass === YourPassword.value ) {
           localStorage.setItem("name",users[i].name)
        return true; 
      } 
    }

    return false
}