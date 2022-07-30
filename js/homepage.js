/*-------------點擊漢堡 呼叫主選單-------------*/
    
let hamber = document.querySelector(".fa-bars"); 
let nav_m = document.querySelector(".nav-m");
let search_m = document.querySelector(".search-m"); /* icon-搜尋 */

    /* 打開導覽列 */
hamber.addEventListener("click", function(){    
    if(nav_m.style.display == "flex"){
        nav_m.style.display = "none";
    }else{
        nav_m.style.display = "flex";
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

/*-------------自動輪播圖-------------*/

// const wrap_slide = document.getElementsByClassName("wrap-slide")[0];
//     console.log(wrap_slide);
//     //確認有幾張slide
// const slide = document.getElementsByClassName("slidef");
//     console.log(slide.length);
// const length_slid = slide.length;


//     //間隔幾秒切換slide
// setInterval(function(){
//      for(i = 0; i < slide.length; i++){
//         let a = 0;
//         wrap_slide.setAttribute("style","margin-left:" + a + "px");
//         a++;
//      };   
    
// },1000);
 


/*-------------時間倒數器-------------*/

//設定初始時間(小時) 
let time_star_hr = 6;
let time_start = time_star_hr*3600; 

setInterval(function(){ /* 每隔一秒執行匿名函式 */
    time_start--;
        //剩下多少小時
    let hour = Math.floor(time_start / 3600); 
    if(hour<10){
        hour = "0" + hour;
    }
        //剩下多少分鐘
    let minutes = Math.floor((time_start - hour*3600) / 60);
    if(minutes<10){
        minutes = "0" + minutes;
    }
        //剩下多少秒
    let second = Math.floor(time_start - (hour*3600 + minutes*60));
    if(second<10){
        second = "0" + second;
    }           
    document.getElementById("countdown").innerHTML = hour + "：" + minutes + "：" + second;
},1000);
