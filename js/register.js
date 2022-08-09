/*付款成功 彈出訊息*/
let submit = document.querySelector(".submit");
let messa = document.querySelector(".messa");
let mask0 = document.querySelector(".mask0");

// submit.addEventListener("click",function(){
//     if (messa.style.display === "none"){
//         messa.style.display = "block";
//         mask0.style.display = "block";
//     } 
// });

function alert_msg(){
    messa.style.display = "block";
    mask0.style.display = "block";    
}

/*----------判斷表單填寫資料是否正確-----------*/

let messa_alert = document.querySelector(".alert-msg"); //資料填寫不完全時，會瑱出的區塊元素
let btn_msg_alert = document.querySelector(".alert-msg").lastElementChild; //找到"確定"按鈕

//開啟 資料填寫不完全的錯誤訊息
function alert_NG(){
    if(messa_alert.style.display == "none"){
        // console.log("開啟錯誤提醒");
        messa_alert.style.display = "flex";
    }
}

//點擊"確定"，能關掉彈出訊息
btn_msg_alert.addEventListener("click", function(e){
    if(messa_alert.style.display == "flex"){    
        // console.log("關閉錯誤提醒");    
        e.preventDefault();
        messa_alert.style.display = "none";
        masktop.style.display = "none";        
    }
})

/*----------判斷表單填寫資料是否正確-----------*/

let email = document.querySelector(".email");
let phonenum = document.querySelector(".phonenum");
let msg_ck = document.querySelector(".msg-check");
let password = document.querySelector(".password");
let password_ck = document.querySelector(".password-check");


//判斷電話是否符合格式?
phonenum.addEventListener("blur", function(e){
    let phone_judge =/^09\d{8}$/; //判斷是否09開頭且9個數字? 
    if(phone_judge.test(phonenum.value) == false){
        this.parentElement.querySelector(".alert").classList.add("-on"); //同層下一個標籤加上class        
    }else{
        this.parentElement.querySelector(".alert").classList.remove("-on");
        this.classList.add("ok");
    }
});

//判斷e-mail格式
email.addEventListener("blur", function(e){
    let email_judge =/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; 
    if(email_judge.test(email.value) == false){
        this.parentElement.querySelector(".alert").classList.add("-on"); //同層下一個標籤加上class        
    }else{
        this.parentElement.querySelector(".alert").classList.remove("-on");
        this.classList.add("ok");
    }
});

//判斷簡訊驗證碼是否為4個數字?
msg_ck.addEventListener("blur", function(e){
    let msg_judge = /[0-9]{4}/; //判斷是否由英文 數字6~12  
    if(msg_judge.test(msg_ck.value) == false){
        this.parentElement.querySelector(".alert-num").classList.add("-on"); //同層下一個標籤加上class
    }else{
        this.parentElement.querySelector(".alert-num").classList.remove("-on");
        this.classList.add("ok"); 
    }
});

//判斷密碼是否6~12個數字與英文組成?
password.addEventListener("blur", function(e){
    let password_judge = /[a-zA-Z0-9]{6,12}/; //判斷是否由英文 數字6~12  
    if(password_judge.test(password.value) == false){
        this.nextElementSibling.classList.add("-on"); //同層下一個標籤加上class
    }else{
        this.nextElementSibling.classList.remove("-on");
        this.classList.add("ok");
    }
});

//密碼確認
password_ck.addEventListener("blur",function(){
    if(password_ck.value != password.value){
        this.nextElementSibling.classList.add("-on"); //同層下一個標籤加上class
    }else{
        this.nextElementSibling.classList.remove("-on");
        this.classList.add("ok");
    }
})

//確認是否有欄位未填寫?
submit.addEventListener("click",function(e){
    if( phonenum.classList.contains("ok") && email.classList.contains("ok")&& msg_ck.classList.contains("ok") && password.classList.contains("ok") && password_ck.classList.contains("ok")){
        // console.log("OK");
        alert_msg(); 
    }else{
        // console.log("NG");
        e.preventDefault();
        masktop.style.display = "block";
        alert_NG(); //跳出錯誤訊息
    }
});


