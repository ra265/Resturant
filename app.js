let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

//signuprealtimedatabase//


// function signin(){
//     var email = document.getElementById('email');
//     var age = document.getElementById('age');


//     var key = firebase.database().ref('student').push().key

//     var student = {
//         email: email.value,
//         age: age.value,
//         key: key   
//     }

//     firebase.database().ref('student/' + key).set(student)

// }
       

//    function getFirebaseData(){
//        firebase.database().ref('student').once('value',function(data){
//            console.log(data.val())
//        })
//    }

//    getFirebaseData()
    

// function removeFirebaseData(){
//     firebase.database().ref('student').remove()
// }

// removeFirebaseData()


//signuprealtimedatabase//



//login authentication//
function login() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((resut) => {
        console.log(resut)
    })
  
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage)
    // ..
  }); 

}

//getauthenticationemail/password//
// var login = ()=>{
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     console.log(email.value)
//     console.log(password.value)
// }

////getauthenticationemail/password//

    // var user = {
    //     email: email.value,
    //     password: password.value,
    // }

    // console.log(user)



//signup//
function signup() {
  // 
  var email = document.getElementById('email');
    var age = document.getElementById('age');


    var key = firebase.database().ref('student').push().key

    var student = {
        email: email.value,
        age: age.value,
        key: key   
    }

    firebase.database().ref('student/' + key).set(student)
  // console.log(users)
  message.innerHTML = "logged in";
  
  // clear state
  setTimeout(() => {
      message.innerHTML = "";
      location.href = "/login.html";

  }, 2000);
}




function login() {
  // get input values
  // var email = document.getElementById("email");
  // var password = document.getElementById("password");

  // var user = {
  //     email: email.value,
  //     password: password.value,
  // }


    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((resut) => {
        console.log(resut)
    })
  
  .catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage)
    // ..
  }); 

}


  // var users = JSON.parse(localStorage.getItem("users")) || [];
  // // get indx
  // var currentUser = users.find(function (val) {
  //     return val.email.toLowerCase() === users.email.toLowerCase() && val.password === user.password;
  // });

  // if (currentUser) {
  //     localStorage.setItem("user", JSON.stringify(currentUser));
  //     // user login
  //     location.href = "index.html";
  // } else {
  //     message.innerHTML = "Invalid credentials";
  // }
  // // clear state
  // setTimeout(() => {
  //     message.innerHTML = "";
  // }, 2000);


function logout() {
  var message = document.getElementById("message");
  localStorage.removeItem("user");
  message.innerHTML = "Good Bye.!";
  // clear state
  setTimeout(() => {
      location.href = "login.html";
  }, 2000);
}
// loginpage//