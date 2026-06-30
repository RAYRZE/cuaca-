const cuaca = document.getElementById("main")
const input = document.getElementById("input")
const btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    cuaca.innerHTML=`<p>${input.value}</p>`
})