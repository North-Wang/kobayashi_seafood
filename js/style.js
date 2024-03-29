/*-------------點擊漢堡 呼叫主選單-------------*/
    
let hamber = document.querySelector(".fa-bars"); 
let nav_m = document.querySelector(".nav-m");
let search_m = document.querySelector(".search-m"); /* icon-搜尋 */
let masktop = document.querySelector(".masktop"); /* main的大遮罩 */

/* 打開導覽列 */
hamber.addEventListener("click", function(){    
    if(nav_m.style.display == "flex"){
        // console.log("關閉導覽列");
        nav_m.style.display = "none";
        masktop.style.display = "none";
    }else{
        // console.log("開啟導覽列");
        nav_m.style.display = "flex";
        masktop.style.display = "block";
    }    
});

/*--------點擊其他地方也能關閉手機版導覽列-------*/

masktop.addEventListener("click",function(){
    if(nav_m.style.display == "flex"){
        // console.log("關閉導覽列");
        nav_m.style.display = "none";
        masktop.style.display = "none";
    }else{
        // console.log("開啟導覽列");
        nav_m.style.display = "flex";
        masktop.style.display = "block";
    }
});

/*-------------點擊搜尋icon 出現輸入欄-------------*/

    /* 取得.search_m的width屬性值 */
let serch_m_b = window.getComputedStyle(search_m, '::after').getPropertyValue("width"); /* #search-m的after偽元素的width屬性 */
let serch_d = document.getElementById("serch-d");
let serch_d_el = serch_d.sheet; 

/* 搜尋列icon綁定click事件 */
search_m.addEventListener("click", function(){
        /* 如果搜尋列的class裡有-on，則::after width為100px，沒有則移除 */
    if(search_m.classList.contains("-on")){
        serch_d_el.removeRule(".search-m.search-m::after{width:100px}",0);
        search_m.classList.remove("-on");
        // console.log("closed");
    }else{        
        serch_d_el.insertRule(".search-m.search-m::after{width:100px}",0);
        search_m.classList.add("-on");
        // console.log("open");
    }    
});

/*-------------點擊購物車-------------*/

let shoppcart = document.querySelector(".fa-cart-shopping");
let shoppcart_fa = shoppcart.closest("li");
let shoppcart_m = document.querySelector(".cart-m");

shoppcart_fa.addEventListener("click",function(){
    alert("測試版尚未開通此功能，敬請期待!");
});

shoppcart_m.addEventListener("click",function(){
    alert("測試版尚未開通此功能，敬請期待!");
});