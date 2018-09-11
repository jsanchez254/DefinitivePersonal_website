var x;

export function less(okay){
    x = document.getElementById(okay);
    if(x.innerHTML === "Less Info"){
        x.innerHTML = "More Info";
    }
    else{
        x.innerHTML = "Less Info";
    }
}