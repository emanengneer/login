
var YourName = document.getElementById("YourName")
var YourEmail = document.getElementById("YourEmail")
var YourPassword = document.getElementById("YourPassword")

let  users = []


if(localStorage.getItem("users") !=null) {
    users = JSON.parse(localStorage.getItem("users"))
    console.log(users);
}




document.getElementById("btnSign").addEventListener("click",function(){
    addUser()
})



function addUser(){
    const user = {
        name:YourName.value,
        email:YourEmail.value,
        pass:YourPassword.value,
    }

    if(checkUser())  {
        alert("Email Exite")
    }
    else {
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users))
        location.href = './index.html'
    }
    }



    



function checkUser() {

    for (let i = 0; i < users.length; i++) {
      if(users[i].email === YourEmail.value ) {
           return true; // موجود 
      } 
    }

    return false
}