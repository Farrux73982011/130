let plus = document.querySelector('.btn')
let minus = document.querySelector('.btn2')
let span = document.querySelector(".span");
let reset = document.querySelector(".reset");
let number = 0

plus.addEventListener( 'click', () =>{
    number++    
    h1.innerHTML = number  
})
reset.addEventListener('click', () =>{
    number = 0
    h1.innerHTML = number
})
minus.addEventListener('click', () =>{
    number--
    h1.innerHTML = number    
})