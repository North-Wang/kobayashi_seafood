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