let colorBtns1 = document.querySelectorAll('.buttons')
let img = document.querySelector('.imgs_iph')

let pictures1 = {
    violet:'./img/violet_iphone.png',
    gold:'./img/gold_iphone.png',
    silver: './img/white_iphone.png',
    black: './img/spaseblack_iphone.png'
}

colorBtns1.forEach((btn) => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')
        img.src = pictures1[key]
    }
})