let boxes = document.querySelectorAll(".box")

boxes.forEach((box) =>{
    console.log(boxes);
    box.onmousecenter = () =>{
        box.classList.add("active")
    }
})