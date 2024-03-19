let lapsCompleted = 0;
let countEl=document.getElementById("count-el")
function increment(){
    lapsCompleted = lapsCompleted + 1;
    countEl.innerHTML = lapsCompleted;

}

function decrement(){
    lapsCompleted = lapsCompleted -1;
    countEl.innerHTML = lapsCompleted;
}