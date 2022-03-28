let count=0
let countEL=document.getElementById("count")
let saveEL=document.getElementById("save-el")

function increment(){
    count++;
    console.log(count)
    countEL.textContent=count
}
function save(){
    //saveing the increment in a variable
    let p= count +" - "
    saveEL.textContent+=p
    //resetting the counter
    count=0
    countEL.textContent=count
console.log(p);
}

