function creat(){
    let a = document.getElementById("creat");
    a.style.display="block";
}


let c=0;
document.getElementById("addbtn").addEventListener("click",function(event){
    event.preventDefault();
    c++;
    let task= document.getElementById("user_t").value;
    if(task==="")return;
    let newdiv1=document.createElement("div");
    let newdiv2=document.createElement("div");
    newdiv1.id="show_uta"+c;
    newdiv2.id="show_uti"+c;
    setTimeout(()=>{
        document.getElementById("sec1").appendChild(newdiv1);
        document.getElementById("sec2").appendChild(newdiv2);
        let a = document.getElementById("show");
        a.style.display="block";
        let b = document.getElementById("g_t_h");
        b.style.display="inline-block";
        let time= document.getElementById("time").value;
        newdiv1.textContent=task;
        if(time==="" || time=="00:00"){
            newdiv2.textContent="--:--:--";
            return;
        }
        else{
            time+=":00";
            newdiv2.textContent=time;
        }
        document.getElementById("user_t").value="";
        document.getElementById("time").value="";
        timer(time,newdiv2,task,c);
    }
    ,1200)
});


function timer(time,newdiv2,task,c){
    let t= time.split(":");
    let h=t[0];
    let m=t[1];
    let s=t[2];
    let total_sec = (h*60*60)+(m*60);
    let set_t=setInterval(()=>{
        total_sec--;
        if(total_sec===0){
            alert(`Dear, User your time is up for "${task}".You can see in your history.`);
            update_hist(task,time,c);
            clearInterval(set_t);
        }
        update_timer(total_sec,newdiv2)
    },1000);
}


function update_timer(total_sec,newdiv2){
    let h=String(Math.floor(total_sec/3600)).padStart(2,"0")+":";
    let m =String(Math.floor((total_sec % 3600)/60)).padStart(2,"0")+":";
    let s= String(total_sec % 60).padStart(2,"0");
    newdiv2.textContent=h+m+s;
}


function update_hist(task,time,c){
    localStorage.setItem("t"+c,task);
    localStorage.setItem("ti"+c,time);
    localStorage.setItem("con",c);
}