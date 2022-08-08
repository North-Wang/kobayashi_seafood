/*-------------自製 自動輪播圖-------------*/

let right = document.querySelector(".fa-chevron-circle-right"); //右方箭頭
let left = document.querySelector(".fa-chevron-circle-left"); //左方箭頭

let wrap_slide = document.querySelector(".cover-fish"); // slide外框容器 

let slide = document.querySelectorAll(".slide"); /* 找到所有slide元素 */
let slide_count = $('.slide').length; //計算有多少張slide
let slide_first = wrap_slide.firstElementChild; //第一張slide
let slide_last = wrap_slide.lastElementChild; //wrap_slide的最後一個子元素
    // console.log(slide[0]); //第一張slide
    // console.log(slide_last); //最後一張slide
let slide_second = wrap_slide.querySelector(".mask"); //找到第二張slide
// console.log(slide_second);

    // console.log("總共有" + slide_count + "張"); //印出slide張數
let s1 = document.querySelector("s1");
let slide_wid = slide[1].clientWidth; //計算第一個.slide的寬度 
    // console.log(slide_wid); //第一張slide的寬度

let wraslide_width = wrap_slide.offsetWidth; //計算wrape-slide的寬度
    // console.log(slide_width); //wrap-slide寬度

let x = 1;

function moveSlide_R(){    
    wrap_slide.style.marginLeft = (slide_count - 3)*38.75 + 'rem'; //根據slide張數自動調整
    // console.log("margin-left：" + wrap_slide.style.marginLeft); //印出指定距離

/* 複製、刪除li */
    // console.log("現在的x為:" + x);
    wrap_slide.insertAdjacentHTML("beforeend",wrap_slide.firstElementChild.outerHTML); //複製第一張slide到最右邊    
    wrap_slide.removeChild(wrap_slide.firstElementChild); //刪除第一個li

/* 開啟全部的遮罩 */
    let mask_all = document.querySelectorAll(`.slide>.mask`); //抓到所有的遮罩    
    for(i = 0; i < slide_count -1; i++){
        mask_all[i].style.opacity = 0;
    }  

/* 限制a的範圍，打開指定的遮罩*/
    // let a = x; // 
    // console.log("現在的a數值為:" + a);

    // if(a == 0){
    //     let mask2 = document.querySelector(`.m2`);
    //     console.log("重新開始");
    //     mask2.style.opacity = 0;
    //     a = 1; 
    //     }else if(a == slide_count -1){
    //         let maskX = document.querySelector(`.m1`);
    //         maskX.style.opacity = 0;
    //     }else if( a < slide_count -1 ){ //slide_count -1 = 6
    //         let maskX = document.querySelector(`.m${a + 2}`); //抓到第(x+1)個遮罩
    //         maskX.style.opacity = 0;
    //         a++; 
    //     } 
        
    // console.log("下一個a的數值為:" + a);
    
/* 限制x範圍 */ //1 2 3 4 5 6 
    if(x < slide_count -1 ){
        x++;
    }else{
        x = 1;
        wrap_slide.style.marginLeft = (slide_count - 3)*38.7 + 'rem'; //根據slide數量調整初始位置
    }
};

function moveSlide_L(){
    wrap_slide.style.marginLeft = (slide_count - 3)*38.75 + 'rem'; //根據slide張數自動調整

    /* 複製、刪除li */
    // console.log("現在的x為:" + x);
    wrap_slide.insertAdjacentHTML("afterbegin",wrap_slide.lastElementChild.outerHTML); //複製最後一張slide到最左邊    
    wrap_slide.removeChild(wrap_slide.lastElementChild); //刪除最後一個li

    /* 限制x範圍 */
    if(x > 0 ){
        x--;
    }else{
        x = 1;
        wrap_slide.style.marginLeft = (slide_count - 3)*38.7 + 'rem'; //根據slide數量調整初始位置
        }
    console.log("下一張x為:" + x);
};

function moveSlide_m_R(){
    wrap_slide.style.marginLeft = 45.6 + 'rem'; //5張 讓slide2調整保持在畫面中間
    // wrap_slide.style.marginLeft = 68.4 + 'rem'; //6張 讓slide2調整保持在畫面中間
    wrap_slide.style.marginLeft = (slide_count - 3)*22.8 + 'rem'; //根據slide張數自動調整

    /* 複製、刪除li */
    // console.log("現在的x為:" + x);
    wrap_slide.insertAdjacentHTML("beforeend",wrap_slide.firstElementChild.outerHTML); //複製第一張slide到最右邊    
    wrap_slide.removeChild(wrap_slide.firstElementChild); //刪除第一個li

    /* 限制x範圍 */
    if(x < slide_count -1 ){
        x++;
    }else{
        x = 1;
        // wrap_slide.style.marginLeft = 45.6 + 'rem'; //5張 讓slide2調整保持在畫面中間
        // wrap_slide.style.marginLeft = 68.4 + 'rem'; //6張 讓slide2調整保持在畫面中間
        wrap_slide.style.marginLeft = (slide_count - 3)*22.8 + 'rem'; //根據slide張數自動調整            
    }
    // console.log("下一張x為:" + x);
};

function moveSlide_m_L(){
    wrap_slide.style.marginLeft = (slide_count - 3)*22.8 + 'rem'; //根據slide張數自動調整

    /* 複製、刪除li */
    wrap_slide.insertAdjacentHTML("afterbegin",wrap_slide.lastElementChild.outerHTML); //複製最後一張slide到最左邊    
    wrap_slide.removeChild(wrap_slide.lastElementChild); //刪除最後一個li

    /* 限制x範圍 */
    if(x > 0 ){
        x--;
    }else{
        x = 1;
        wrap_slide.style.marginLeft = (slide_count - 3)*22.8 + 'rem'; //根據slide張數自動調整
    }
};

//調整.wrape-slide的初始位置
if(window.innerWidth > 500){ //當螢幕寬度大於1000px時，才執行
    wrap_slide.style.marginLeft = (slide_count - 3)*38.75 + 'rem'; //根據slide數量調整初始位置
    // console.log(wrap_slide.style.marginLeft); //初始wrape-slide的margin-left數值

    /*---右鍵 切換slide---*/
    right.addEventListener("click",moveSlide_R);  

    /*---左鍵 切換slide---*/
    left.addEventListener("click",moveSlide_L);
};



/*-----------自動輪播圖(手機版)------------*/

if(window.innerWidth <= 500){
        // wrap_slide.style.marginLeft = 45.6 + 'rem'; //5張 讓slide2調整保持在畫面中間
        // wrap_slide.style.marginLeft = 68.4 + 'rem'; //6張 讓slide2調整保持在畫面中間
    wrap_slide.style.marginLeft = (slide_count - 3)*22.8 + 'rem'; //根據slide張數自動調整

    /*---右鍵 切換slide---*/
    right.addEventListener("click",moveSlide_m_R);

    /*---左鍵 切換slide---*/
    left.addEventListener("click",moveSlide_m_L);
};

/*-------------時間倒數器-----------------*/

//設定初始時間(小時) 
let time_star_hr = 6;
let time_start = time_star_hr*3600; 

function timeCounting(){
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
};

//倒數計時
setInterval(timeCounting,1000);

/*-------------視覺圖----------------*/

let cut_fish = document.querySelector(".cut_fish"); //視覺圖 父層
let fish_left = document.querySelector(".fish-left");
let fish_right = document.querySelector(".fish-right");
let knife = document.querySelector(".knife");

if(window.innerWidth > 500){
    document.addEventListener("scroll",function(e){
        // console.log(scrollY + "px"); //滾動了多少距離? 
        // console.log(knife_h); //.knife本身的高度
        // console.log(cut_fish.clientHeight); //父層.cut-fish本身的高度
        // console.log(cut_fish.offsetTop); //1480。定值。父層距離網頁頂部的距離
        // console.log(knife.offsetTop); //knife距離父層的y距離。定值
        // console.log(window.innerHeight); //螢幕可視範圍的高度
        let scroll_dis = Math.ceil(window.innerHeight + window.scrollY - cut_fish.offsetTop); //螢幕高度+滾動了距離-父層距離頂端的高度
        // console.log(scroll_dis); //目標在630~985       
    
        e.preventDefault();
        // console.log(knife_dis);
        // console.log(window.scrollY - cut_fish.offsetTop); //
        if(scroll_dis >= 630 && scroll_dis <= 985){
            knife.style.top = 0 + (scroll_dis - 630)*2.6 + "px"; //要扣掉scroll_dis的起始距離
            fish_right.style.left = -26 + (10/(985-630))*(scroll_dis - 630) + "vw" //控制在-26vw~ -16vw
            fish_left.style.left = -26 - (10/(985-630))*(scroll_dis - 630) + "vw" //控制在-26vw~ -16vw
        }
    })
}else{
    document.addEventListener("scroll",function(e){ 
        let scroll_dis = Math.ceil(window.innerHeight + window.scrollY - cut_fish.offsetTop); //螢幕高度+滾動了距離-父層距離頂端的高度
        console.log(scroll_dis); //目標在465~700
        // console.log(cut_fish.offsetHeight);   
        if(scroll_dis >= 465 && scroll_dis <= 700){
            // console.log(Math.ceil(window.innerHeight + window.scrollY - cut_fish.offsetTop) - 465);
            knife.style.top = -75 + (scroll_dis - 465)*1.6 + "px"; //-75是knife top初始數值
            fish_right.style.left = -83 + (20/(700-465))*(scroll_dis - 465) + "vw" //控制在-83vw~ -63vw
            fish_left.style.left = -83 - (20/(700-465))*(scroll_dis - 465) + "vw" //控制在-83vw~ -103vw
        }
    })
};
