function showHistory(){
    let c =localStorage.getItem("con");
    if (c==null){
        alert("You not completed any task yet.");
        return;
    }
    while(c!=0){
        let ta = localStorage.getItem("t"+c);
        let ti = localStorage.getItem("ti"+c);
        if(ta!=null){
            Show_h(ta,ti,c);
            c--;
        }
    }
}
function Show_h(ta,ti,c){
    let new_div = document.createElement("div");
    new_div.id="c_tasks"+c;
    document.getElementById("mainsec").appendChild(new_div);
    document.getElementById("c_tasks"+c).innerHTML=`Cogratulations🥳, You have completed your task "${ta}" in ${ti} time!!`;
    localStorage.removeItem("t"+c);
    localStorage.removeItem("ti"+c);
    localStorage.removeItem("con"+c);
}