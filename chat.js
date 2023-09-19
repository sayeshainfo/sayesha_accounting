let openchat = document.getElementById("chat-open");
let closechat = document.getElementById("close-btn2");
let chatui  = document.getElementById("en-main");

openchat.addEventListener("click" , () =>
{
   // openchat.style.cssText = "display:none";
   chatui.style.cssText = "display:block";
});

closechat.addEventListener("click" , () =>
{
   chatui.style.cssText = "display:none";
   // openchat.style.cssText = "display:block";

});



let sendbtn  = document.getElementById("send-btn");
let chatcustom  = document.getElementById("chat-cust");
let chatuser = document.getElementById("chat-come");
let customchat  = document.getElementById("chat-cs"); 
let dchat = document.getElementById("default-chat");

var input = document.getElementById("chat-inp");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("send-btn").click();
    input.value = "  ";
  }
});
sendbtn.addEventListener("click" , function()
{
let chatinp = document.getElementById("chat-inp").value;
    if(chatinp.includes('@'))
    {
// var input = document.getElementById("chat-inp");/
// chatinp.name = email;
 input.name = "email";
let p = 
    ` <p id="define-msg "> thank you</p>
    `;
    dchat.innerHTML  = p;

    }
    else{
   input.name = "msg";
let p = 
` <p id="define-msg ">plz enter your email address our team reply you in 24 hours </p>
`;
dchat.innerHTML = p;
// let definechat = document.getElementById("define-msg").innerHTML = "thank you for visiting";
    }
     let r = `
     <p id="chat-come">${chatinp}</p> <br>
     `;
    // customchat.classList.add("chat-cs");
    chatcustom.innerHTML += r ;
   
    
    const scriptURL ='https://script.google.com/macros/s/AKfycbzv6Ppl2ZEhKKkbzhvKWz-djXLS-wJU1fl5q6tjNJ8tfBB4qdHG1kNTnzavel3uFRXb/exec';
    const form = document.forms['contacthf2']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      if(chatinp.includes('@')){
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Thank you! your form is submitted successfully." ))
        .then(() => {  window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
      }
    })
  
    // customchat.innerHTML 
});

