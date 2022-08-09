/*------------選擇購買數量-------------*/

let minus = document.querySelector(".fa-minus"); /* 減少購買的數量 */
let plus = document.querySelector(".fa-plus"); /* 增加購買的數量 */

let merc_num = document.querySelector(".number"); /* 購買的數量 */
// let merc_num_iner = merc_num.innerHTML; /* 購買的數量 內容 */

let single_num = document.querySelector(".num-single"); /* 單價 */
// let s_num_iner = single_num.innerHTML; /* 單價 內容 */

let total_num = document.querySelector(".num-total"); /* 總價 */
// let total_num_iner = total_num.innerHTML; /* 總價 內容 */

//增加數量
plus.addEventListener("click",function(e){   
    e.preventDefault(); 

    merc_num.innerHTML++;

    let a = parseInt(merc_num.innerHTML); /* 存放"目前購買的數量"。轉成數字 */
    let b = parseInt(single_num.innerHTML); /* 存放"單價"。轉成數字 */

    total_num.innerHTML = a * b;
    
});

//減少數量
minus.addEventListener("click",function(e){
    e.preventDefault();

    if(merc_num.innerHTML == 0){        
    }else{
        merc_num.innerHTML--;

        let b = parseInt(single_num.innerHTML); /* 存放"單價"。轉成數字 */

        total_num.innerHTML = total_num.innerHTML - b ;
    }    
});

/*------------擇一付款方式-------------*/

let cli_1 = document.querySelector(".radio1");
let qrcode = document.querySelector(".qrcode");
let cli_2 = document.querySelector(".radio2");
let visa_detail = document.querySelector(".visa-detail");
// let mask0 = document.querySelector(".mask0");

cli_1.addEventListener("click",function(){
    qrcode.style.display = "none";
    visa_detail.style.display = "none"; /*讓兩個選項都先none，再根據if來決定誰開啟*/
    if (qrcode.style.display === "none"){
        qrcode.style.display = "block";
    }else{        
    }
})

cli_2.addEventListener("click",function(){
    qrcode.style.display = "none";
    visa_detail.style.display = "none";
    if (visa_detail.style.display === "none"){
        visa_detail.style.display = "block";
    }else{        
    }
})

/*------------付款成功 彈出訊息-------------*/

let submit = document.querySelector(".submit");
let messa = document.querySelector(".messa"); //成功時的彈出訊息

function alert_OK(){
    if(messa.style.display == "none"){
        messa.style.display = "block";
        masktop.style.display = "block"; 
    }
};

/*------------表單填寫不完全 彈出訊息-------------*/

let messa_alert = document.querySelector(".alert-msg"); //資料填寫不完全時，會瑱出的區塊元素
let btn_msg_alert = document.querySelector(".alert-msg").lastElementChild; //找到"確定"按鈕

//開啟 資料填寫不完全的錯誤訊息
function alert_NG(){
    if(messa_alert.style.display == "none"){
        console.log("開啟錯誤提醒");
        messa_alert.style.display = "flex";
    }
}

//點擊"確定"，能關掉彈出訊息
btn_msg_alert.addEventListener("click", function(e){
    if(messa_alert.style.display == "flex"){    
        console.log("關閉錯誤提醒");    
        e.preventDefault();
        messa_alert.style.display = "none";
        masktop.style.display = "none";
        
    }
})

/*----------判斷表單填寫資料是否正確-----------*/

let email = document.querySelector(".email");
let phonenum = document.querySelector(".phonenum");

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

//確認是否有欄位未填寫?
submit.addEventListener("click",function(e){
    if( phonenum.classList.contains("ok") && email.classList.contains("ok")){
        // console.log("OK");
        alert_OK(); 
        masktop.style.display = "block"; 
    }else{
        // console.log("NG");
        e.preventDefault();
        alert_NG();
        masktop.style.display = "block"; 
    }
});