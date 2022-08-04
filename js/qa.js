/*-------------點擊Question 出現Answer-------------*/

    let que = document.querySelector(".question");
    let ans = document.querySelector(".answer");
    let op_ans = document.querySelectorAll(".fa-caret-down");
    
    /* 箭頭icon綁定click事件 */
    op_ans.addEventListener("click", function(e){
        e.preventDefault();
        // if(ans.style.display = "none"){
        //     ans.style.display = "block";
        //     console.log("open");
        // }else{        
        //     ans.style.display = "none";
        //     console.log("closed");
        // }    
    });