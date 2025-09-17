window.addEventListener("DOMContentLoaded",()=>{
    let ta = localStorage.getItem("t");
    let ti = localStorage.getItem("ti");
    let co = localStorage.getItem("con");
    if(ta!=null){
        Show_h(ta,ti,co);
    }
    else{
        return;
    }

})

function Show_h(ta,ti,co){
    let new_div = document.createElement("div");
    new_div.id="c_tasks"+co;
    document.getElementById("mainsec").appendChild(new_div);
    document.getElementById("c_tasks"+co).innerHTML=`Cogratulations🥳, You have completed your task "${ta}" in ${ti} time!!`;
    localStorage.removeItem("t");
    localStorage.removeItem("ti");
    localStorage.removeItem("con");
}