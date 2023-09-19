let menubtn = document.getElementById("menu");
let mobhead = document.getElementById("mob-div");
let closebtn = document.getElementById("close-btn");
let head = document.getElementById("head");
menubtn.addEventListener("click" , function(){
   head.style.cssText="display:none;";
   mobhead.style.cssText="margin-top:0px";

});

closebtn.addEventListener("click" , function(){
    mobhead.style.cssText="margin-top:-630px";
    head.style.cssText="display:flex";
 });
