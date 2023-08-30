//取得input與按鈕的節點
const input = document.querySelector("#email");
const btn = document.querySelector(".form_btn");
const errorMessage = document.querySelector(".error_message")


//取得input的輸入內容
input.addEventListener("change",(e)=>{
    const email = e.target.value;
    let validateState = "init";//按鈕的狀態  成功:success 初始:init 未通過:"error"

    //驗證輸入的信箱格式是否正確
    validateState = validateEmaillFormat(email);     
    //改變按鈕的狀態
    handleBtnState(validateState);
    //驗證時失敗時，input會給提示
    handleInputState(validateState)

})

btn.addEventListener("click",(e)=>{
    loadSuccessPage()
})


function validateEmaillFormat(email){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(email)) {
       return "success";
    } else if(email==="") {
        //input空白>>初始       
      return "init";
}else{
    //驗證未通過   
    return "error"
}
}

function handleBtnState(validateState){   
   if(validateState==="success"){
    //信箱驗證成功
    //讓btn可以點擊
    btn.disabled =false;
    //移除所有非當前狀態的class
    btn.classList.remove("init_btn");
    btn.classList.remove("errorBtn");
    //寫入當前狀態的class
    btn.classList.add("sucessBtn");
   }
   else if(validateState ==="error"){
    //信箱驗證失敗
   //讓btn不能點擊
    btn.disabled =true;
     //移除所有非當前狀態的class
    btn.classList.remove("init_btn");
    btn.classList.remove("sucessBtn");
    //寫入當前狀態的class
    btn.classList.add("errorBtn");

   }else{
    //初始狀態
    //讓btn不能點擊
    btn.disabled =true;
     //移除所有非當前狀態的class
    btn.classList.remove("errorBtn");
    btn.classList.remove("sucessBtn");
    //寫入當前狀態的class
    btn.classList.add("init_btn");
   }
}

function handleInputState(validateState){
    //錯誤時報錯
    if(validateState==="error"){
        input.classList.add("email_error");
        errorMessage.classList.remove("error_message_hidden");

    }//其他的狀態正常
    else{
        input.classList.remove("email_error");
        errorMessage.classList.add("error_message_hidden");
    }
   
}


//在mobile更換圖片
function changeImageInMobile(){
    //取得當前銀幕width
    const widthOfScreen = document.body.clientWidth;
    //取得圖片節點
    const image =document.querySelector(".newsLetter__image img");
    
    //如果width小於375px,就更換圖片
    if(widthOfScreen<375){
        image.src ="./assets/images/illustration-sign-up-mobile.svg";
    }else{
        //如果width大於375px,就換回desktop的圖片
        image.src ="./assets/images/illustration-sign-up-desktop.svg"
    }

}

function loadSuccessPage(){
    window.location.assign("./successPage.html")
}

//初始化先執行一次
changeImageInMobile()
// 添加一个resize事件监听器
window.addEventListener('resize',changeImageInMobile);