const inputEl = document.querySelector(".input");

console.log(inputEl)

const bodyEl = document.querySelector("body"); 

updateBody()

function updateBody(){
    if(inputEl.checked){
        bodyEl.style.background = "#2a2929";
    } else {
        bodyEl.style.background = "white";
    }
}

inputEl.addEventListener("input", ()=>{
    updateBody()
})