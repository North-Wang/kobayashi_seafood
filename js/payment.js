/*------------選擇購買數量-------------*/

let mines = document.querySelector("fa-minus");
let plus = document.querySelector("fa-plus");
let merch_num = document.querySelector(".number"); /* 購買的數量 */ 

/*------------擇一付款方式-------------*/
let cli_1 = document.querySelector(".radio1");
let qrcode = document.querySelector(".qrcode");
let cli_2 = document.querySelector(".radio2");
let visa_detail = document.querySelector(".visa-detail");
let mask0 = document.querySelector(".mask0");

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
let messa = document.querySelector(".messa");

submit.addEventListener("click",function(){
    if (messa.style.display === "none"){
        messa.style.display = "block";
        mask0.style.display = "block";
    }else{        
    }
})