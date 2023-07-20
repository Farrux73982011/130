let inp = document.querySelector('.switch')
let container = document.querySelector('.container')

inp.onclick = () => {
    if (inp.classList.contains('actv')) {
        inp.classList.remove('actv')
        container.style.backgroundColor = "white"
    }else{
        inp.classList.add('actv')
        container.style.backgroundColor = "#0e1621"
    }
}