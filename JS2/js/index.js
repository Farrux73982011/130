// for (let i = 1; i < 11; i++) {
//     for (let k = 1; k < 11; k++) {
//         document.write(`${i} * ${k} = ` + i * k+ ' ' + "<br>") 
//     }
//     document.write("<hr>")
    
// }

// for (let i = 5; i >= 1; i--) {
//     for (let k = 1; k <= i; k++) {
//         document.write('*')
//     }
//     document.write('<br>')
// }

let products = [
    {
        name: "yogurt",
        type: "milk",
        price: 8000
    },
    {
        name: "apple",
        type: "fruit",
        price: 10000
    },
    {
        name: "vodka",
        type: "alcohol",
        price: 74000
    },
    {
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {
        name: "smetana",
        type: "milk",
        price: 10000
    },
    {
        name: "banana",
        type: "fruit",
        price: 28000
    },
    {
        name: "juice",
        type: "fruit",
        price: 15000
    },
    {
        name: "konyak",
        type: "alcohol",
        price: 100000
    }
]


let categories = [
    {
        type: "milk",
        count: 0,
        arr: []
    },
    {
        type: "fruit",
        count: 0,
        arr: []
    },
    {
        type: "alcohol",
        count: 0,
        arr: []
    }
]
let discount = prompt('1 - 100%')

for(let product of products){
    for (let category of categories) {
        category.total = 0
    }
}

// create new key (total) and summorize all prices of this type product
//

for (let product of products) {
    for (let category of categories) {
        if (product.type === category.type) {
            category.total += product.price
            category.count++
            category.arr.push(product.name)
        }
        product.discount = `-${product.price * discount / 100}`
    }
}
console.log(categories);
console.log(products);