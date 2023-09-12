
let done = document.getElementsByClassName("done-icon");
let input = document.querySelectorAll(".input");
let remove = document.querySelectorAll(".remove-icon");
let icon = document.querySelectorAll(".fa-regular fa-circle")



console.log(done.length);
console.log(done.forEach);
console.log(input[0].textContent)

for(let i = 0; i < done.length; i++) {
   done[i].addEventListener("click" , function(){
   input[i].classList.toggle('line');

})}

for(let i = 0; i < done.length; i++) {
   remove[i].addEventListener("click" , function() {
      input[i].value = ''
   })
}
   



