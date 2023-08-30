const btn = document.querySelector(".btn__dimiss")


//滑鼠在按鈕上.更改按鈕樣式
btn.addEventListener("mouseover",(e)=>{
    btn.classList.add("btn_mouseOn");
})


btn.addEventListener("mouseleave",(e)=>{
    btn.classList.remove("btn_mouseOn");
})

btn.addEventListener("click",(e)=>{
    loadIndex();
})

function loadIndex(){
    window.location.assign("./index.html");
}