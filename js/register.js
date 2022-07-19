/*付款成功 彈出訊息*/
var submit = document.querySelector(".submit");
var messa = document.querySelector(".messa");
var mask0 = document.querySelector(".mask0");

submit.addEventListener("click",function(){
    if (messa.style.display === "none"){
        messa.style.display = "block";
        mask0.style.display = "block";
    }else{        
    }
});
