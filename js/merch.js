/*滑鼠移動到各種類的特效*/
var m1 = document.querySelector(".m1");
var t1 = document.querySelector(".title1");

m1.addEventListener("mouseover",function(){
    t1.style.transform = "scale(1.2,1.2)";
})

var m2 = document.querySelector(".m2");
var t2 = document.querySelector(".title2");

m2.addEventListener("mouseover",function(){
    t2.style.transform = "scale(1.2,1.2)";
})

var m3 = document.querySelector(".m3");
var t3 = document.querySelector(".title3");

m3.addEventListener("mouseover",function(){
    t3.style.transform = "scale(1.2,1.2)";
})

var m4 = document.querySelector(".m4");
var t4 = document.querySelector(".title4");

m4.addEventListener("mouseover",function(){
    t4.style.transform = "scale(1.2,1.2)";
})

/*mouse out*/

m1.addEventListener("mouseout",function(){
    t1.style.transform = "scale(1,1)";
})

m2.addEventListener("mouseout",function(){
    t2.style.transform = "scale(1,1)";
})

m3.addEventListener("mouseout",function(){
    t3.style.transform = "scale(1,1)";
})

m4.addEventListener("mouseout",function(){
    t4.style.transform = "scale(1,1)";
})