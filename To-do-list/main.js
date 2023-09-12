
let done = document.getElementsByClassName("done-icon");
let input = document.querySelectorAll(".input");
let remove = document.querySelectorAll(".remove-icon");

for(let i = 0; i < done.length; i++) {
   done[i].addEventListener("click" , function(){
   input[i].classList.toggle('line');

})}

for(let i = 0; i < done.length; i++) {
   remove[i].addEventListener("click" , function() {
      input[i].value = ''
   })
}
   



