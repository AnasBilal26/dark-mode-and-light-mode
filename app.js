// let button = document.querySelector ("button")
// let flag = true
// let number = 30
// button.addEventListener("click",function(){
// if (number==30){
// alert("hey")
// }
// else if (flag==false){

// alert("u r best")
// }
// else{
// alert("not")
// }
// });




// let first = document.querySelector (".first")
// let second = document.querySelector (".second")
// let third = document.querySelector (".third")

// setTimeout(function(){

// second.style.color = "white";

// second.style.display = "none";

// second.style.opacity = 0.6;

// },3000);




// let first = document.querySelector (".first")
// let second = document.querySelector (".second")
// let third = document.querySelector (".third")

// first.addEventListener("click",function(){

// second.style.color = "white";

// second.style.display = "none";

// second.style.opacity = 0.6;

// });




// let paent = document.querySelector (".paent")

// setTimeout(function(){
//     paent.style.top = "-100%";


// },3000);


// let dark = document.querySelector (".firstbutton")

// var body = document.querySelector ("body")


// dark.addEventListener("click",function(){

//     body.style.backgroundColor = "green"

// });



// let light = document.querySelector (".secondbutton")
// var body = document.querySelector ("body")

// light.addEventListener("click",function(){

//     body.style.backgroundColor = "blue"


    
// })



// this is dark mode light mode code


var design =document.querySelector(".design")

var child = document.querySelector (".child")
var body =document.querySelector("body")
var flag = 0

design.addEventListener("click",function(){

if(flag==0){
        body.style.backgroundColor = "gray"
   child.style.backgroundColor = "skyblue"
    child.style.left = 0;
    flag=1

}
else{
        body.style.backgroundColor = "black"
   child.style.backgroundColor = " red"
    child.style.left = "65%";
    flag=0

}


})

