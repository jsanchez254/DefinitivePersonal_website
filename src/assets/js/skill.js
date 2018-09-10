var x;
var expando;
var i = 0;
var y;
export function expand(){
    console.log("HELLO THERE");
    y = document.getElementById("skillBox");
    y.style.width= '1%';
    x =setInterval(expandoF, 11);
}

function expandoF(){
    expando = i + '%';
    console.log(expando);
    y.style.width = expando;
    y.innerHTML = expando;
    if(y.style.width === "100%"){
        clearInterval(x);
    }
    i++;
}