function oc(){
    let bt = document.getElementById("submit_btn");
    bt.style.display="none";
    setTimeout(()=>{
        let ac=document.getElementById("after_click");
        ac.style.display="block";
    },1000);
}