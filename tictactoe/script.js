let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newbtn=document.querySelector("#new");
let win=document.querySelector(".win");
let msg=document.querySelector(".winner")

let turn0=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turn0=true;
    enable();
    win.style.display="none";
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0===true){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerHTML="X";
            turn0=true;  
        }
        box.disabled=true;
        checkWinner();
    });

});
const disbale=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`WINNER is ${winner}!!!`;
    win.style.display="block"; 
    disbale();
}

const checkWinner=()=>{
   for(let pattern of winpatterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!=""&&pos2!=""&&pos3!=""){
        if(pos1===pos2&&pos2==pos3){
            console.log("winner");
            showWinner(pos1);
        }
    }

   } 
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);