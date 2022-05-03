let body =document.querySelector("body");


function changeColor(){
    let colors=["red","yellow","pink","white","blue","lime","gray","crimson","darkorange"];
    let num=Math.floor((Math.random()*colors.length) +1);
    body.style.backgroundColor=colors[num];
}