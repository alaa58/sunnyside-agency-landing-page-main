let menuElem = document.getElementsByClassName("menu")[0];
let hiddenElem = document.getElementsByClassName("hidden-menu")[0];
menuElem.addEventListener("click",()=>{
    hiddenElem.classList.toggle("show-menu")
});