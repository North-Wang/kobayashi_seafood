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
