let btns = document.querySelectorAll(".addCart");
let bag = document.querySelector(".logo-img-container:nth-child(3) img");

for(let btn of btns) {
    btn.addEventListener("click", bigger);
}

function bigger () {
    bag.classList.add("bigger-img");
    setTimeout(() => {
        bag.classList.remove("bigger-img");
    }, 600); 
}