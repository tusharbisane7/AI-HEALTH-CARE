let search = document.querySelector(".search");
let button = document.querySelector(".search_icon");
let input = document.querySelector(".input");

button.addEventListener("click", ()=>{
    if(input.classList.length === 2){
        input.classList.remove("active");
    }
    else{
        input.classList.add("active");
        input.focus();
    }
})