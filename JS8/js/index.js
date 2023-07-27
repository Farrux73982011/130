let colorBtns1 = document.querySelectorAll('.buttons')
let img = document.querySelector('.imgs_iph')
let span_color = document.querySelector('.span_color')

let pictures1 = {
    violet:'./img/violet_iphone.png',
    gold:'./img/gold_iphone.png',
    silver: './img/white_iphone.png',
    black: './img/spaseblack_iphone.png'
}

let texts = {
    violet:' - violet',
    gold:' - gold',
    silver: ' - silver',
    black: ' - black'
}

colorBtns1.forEach((btn) => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')

        img.src = pictures1[key]
        span_color.innerHTML = texts[key]
    }
})