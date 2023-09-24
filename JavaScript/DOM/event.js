let btn=document.querySelector("button");
console.log(btn) // it will btn elemtnt

// onclick
//nameless function
// btn.onclick=function(){
//     console.log("button was clicked"); // when we click btn print button was click in console
// }

btn.onclick=function sayhello(){
    console.log("sayhello");
}
btn.sayhello;


//for multiple btn on page 
let btns = document.querySelectorAll(".box button");
for(but of btns){
    but.onclick=say;
}
 function say(){
    console.log("say");
 }


 let hower=document.querySelector("#hower")
 console.log(hower)
 hower.onmouseenter = function(){
    alert("when u hower on btn this msg print on console")
 }