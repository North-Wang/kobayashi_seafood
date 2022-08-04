
/*-------------自動輪播圖 手刻 測試-------------*/

let right = document.querySelector(".fa-chevron-circle-right"); /* 右方箭頭 */
let left = document.querySelector(".fa-chevron-circle-left"); /* 左方箭頭 */

let wrap_slide = document.querySelector(".cover-fish"); /* slide外框容器 */
let slide = document.querySelectorAll(".slide"); /* 找到所有slide元素 */
let slide_count = $('.slide').length; //計算有多少張slide
console.log(slide_count);

let s1 = document.querySelector("s1");
let slide_wid = slide[1].clientWidth; //計算第一個.slide的寬度 
// console.log(slide_wid);

let wraslide_width = wrap_slide.offsetWidth; //計算wrape-slide的寬度
// console.log(slide_width); //印出wrap-slide寬度
// console.log(slide_count); //計算有多少張slide
//且slide之間距離20px

let index = 0;
let x = 1;

//調整.wrape-slide的初始位置
if(window.innerWidth > 1000){ //當螢幕寬度大於1000px時，才執行
    wrap_slide.style.marginLeft = (slide_count - 3)*38.7 + 'rem'; //根據slide數量調整初始位置
    console.log(wrap_slide.style.marginLeft);
}




//右鍵 綁定click事件
$(right).click(function(){
    //移動wrap_slide來達到輪播效果
    $(wrap_slide).animate({        
        marginLeft:slide_wid * x + 20        
    })
    console.log($(wrap_slide)[0].style.marginLeft)
    if(x < slide_count){
        x = x + 1
    }else{
        x = 0
    }    
    $(".wrap-slide").append($(".wrap-slide").find(`li:nth-child(${x})`).clone(true));
    $("li:first-child").remove('.wrap-slide');
});

$(left).click(function(){
    $(wrap_slide).animate({
        marginRight:slide_wid * x + 20
    })
    x = x - 1
    $(".wrap-slide").append($(".wrap-slide").find('li:last').clone(true));  
    $(".wrap-slide").remove($(".wrap-slide").find('li:first'));  
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
