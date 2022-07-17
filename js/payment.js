/*單選框 點擊事件*/
var cli_1 = document.querySelector(".radio1");
var qrcode = document.querySelector(".qrcode");
var cli_2 = document.querySelector(".radio2");
var visa_detail = document.querySelector(".visa-detail");

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

/*付款成功 彈出訊息*/
var submit = document.querySelector(".submit");
var messa = document.querySelector(".messa");

submit.addEventListener("click",function(){
    if (messa.style.display === "none"){
        messa.style.display = "block";
    }else{        
    }
})