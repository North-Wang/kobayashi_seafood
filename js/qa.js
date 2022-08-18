/*-------------點擊Question 出現Answer-------------*/

    let que = document.querySelectorAll(".question");
    let ans = document.querySelectorAll(".answer");
    let op_ans = document.querySelectorAll(".fa-caret-down");
    // console.log(op_ans);

    /* 箭頭icon綁定click事件 */

    document.addEventListener("click",function open_ans(e){
        //將每個問題都關閉
        for( let i = 0; i < op_ans.length; i++){
            op_ans[i].closest("div").style.marginBottom = "30px";
            op_ans[i].closest("div").nextElementSibling.style.display = "none";
        }

        // console.log("ok");
        // console.log(e.target); 
        if(e.target.closest("div").classList.contains("question") == true){            
            // console.log(this.style);
            e.target.closest("div").style.marginBottom = "0";
            let ans_el = e.target.closest("div").nextElementSibling;
            ans_el.style.display = "flex";
        }
    })
 