
/*-------------自動輪播圖 手刻 測試-------------*/

// let right = document.querySelector(".fa-chevron-circle-right"); /* 右方箭頭 */
// let left = document.querySelector(".fa-chevron-circle-left"); /* 左方箭頭 */

// let wrap_slide = document.querySelector(".wrap-slide") /* slide容器 */

// // console.log(window.innerWidth);
// right.addEventListener("click",function(){
//     wrap_slide.setAttribute("style","transform:translate(-600px,0)"); /* 容器往左移 */
// });

// left.addEventListener("click",function(){
//     wrap_slide.setAttribute("style","transform:translate(600px,0)"); /* 容器往右移 */
// });

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

    //間隔幾秒切換slide
// setInterval(function(){
//      for(i = 0; i < slide.length; i++){
//         let a = 0;
//         wrap_slide.setAttribute("style","margin-left:" + a + "px");
//         a++;
//      };   
    
// },1000);

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
