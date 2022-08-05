
/*-------------自製 自動輪播圖  測試-------------*/

let right = document.querySelector(".fa-chevron-circle-right"); //右方箭頭
let left = document.querySelector(".fa-chevron-circle-left"); //左方箭頭
let mask = document.querySelectorAll(".mask"); //抓到全部的遮罩
let wrap_slide = document.querySelector(".cover-fish"); // slide外框容器 

let slide = document.querySelectorAll(".slide"); /* 找到所有slide元素 */
let slide_count = $('.slide').length; //計算有多少張slide
let slide_first = wrap_slide.firstElementChild; //第一張slide
let slide_last = wrap_slide.lastElementChild; //wrap_slide的最後一個子元素
    // console.log(slide[0]); //第一張slide
    // console.log(slide_last); //最後一張slide

    console.log("總共有" + slide_count + "張"); //印出slide張數
let s1 = document.querySelector("s1");
let slide_wid = slide[1].clientWidth; //計算第一個.slide的寬度 
    // console.log(slide_wid);

let wraslide_width = wrap_slide.offsetWidth; //計算wrape-slide的寬度
    // console.log(slide_width); //印出wrap-slide寬度
    // console.log(slide_count); //計算有多少張slide

//調整.wrape-slide的初始位置
if(window.innerWidth > 1000){ //當螢幕寬度大於1000px時，才執行
    wrap_slide.style.marginLeft = (slide_count - 3)*38.7 + 'rem'; //根據slide數量調整初始位置
    // console.log(wrap_slide.style.marginLeft); //印出初始wrape-slide的margin-left數值
}

let x = 1;

/*---右鍵 切換slide---*/
/*---移動wrap_slide來達到輪播效果---*/
right.addEventListener("click",function(){
    console.log(slide_count - 1);
        // wrap_slide.style.marginLeft = 38.75 + 'rem'; //4張 讓slide2調整保持在畫面中間
        // wrap_slide.style.marginLeft = 77.5 + 'rem'; //5張 讓slide2調整保持在畫面中間
        // wrap_slide.style.marginLeft = 116.25 + 'rem'; //6張 讓slide2調整保持在畫面中間
        // wrap_slide.style.marginLeft = 155 + 'rem'; //7張 讓slide2調整保持在畫面中間
    wrap_slide.style.marginLeft = (slide_count - 1)*38.75 + 'rem'; //根據slide張數自動調整
        // console.log("margin-left：" + wrap_slide.style.marginLeft); //印出指定距離
    
    /* 複製、刪除li */
        // console.log("現在的x為:" + x);
    wrap_slide.insertAdjacentHTML("beforeend",wrap_slide.firstElementChild.outerHTML); //複製第一張slide到最右邊    
    wrap_slide.removeChild(wrap_slide.firstElementChild); //刪除第一個li
    
    /* 限制x範圍 */
    if(x < slide_count -1 ){
        x++;
    }else{
        x = 1;
        wrap_slide.style.marginLeft = (slide_count - 3)*38.7 + 'rem'; //根據slide數量調整初始位置
    }
    console.log("下一個x為:" + x);
});  

/*---左鍵 切換slide---*/
$(left).click(function(){
    
});





// //RWD

// let windw_wid = window.innerWidth;
// let a = parseInt(windw_wid + "px");
// if( window.innerWidth < 428 ){
//     right.addEventListener("click",function(){
//         wrap_slide.setAttribute("style","transform:translate(414px,0)"); /* 容器往左移 */
//         console.log("R");
//     });
    
//     left.addEventListener("click",function(){
//         wrap_slide.setAttribute("style","transform:translate(-414px,0)"); /* 容器往右移 */
//         console.log("L");
//     });
// }    

/*-------------自動輪播圖 套件 測試-------------*/

// $('.owl-carousel').owlCarousel({
//     stagePadding: 50,
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

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


