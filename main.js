gsap.registerPlugin(ScrollTrigger);

gsap.from("#frm",{
    scale:0.5,
    duration:0.5,
    scrollTrigger:{
    trigger:"#frm",
    scroller:"body",
    markers:false,
    start:"top 100%",
    end:"top 80%",
    scrub:1
}
})
gsap.from(".task",{
    scale:0.5,
    duration:0.5,
    delay:0,
    opacity:0.2
})
gsap.from(".pretask",{
    scale:0.5,
    duration:0.5,
    delay:0,
    opacity:0.2
})
gsap.from(".achive",{
    scale:0.5,
    duration:0.5,
    delay:0,
    opacity:0.2
})
gsap.from(".history",{
    scale:0.5,
    duration:0.5,
    delay:0,
    opacity:0.2
})

function btBorder(){
    let bt=document.getElementById("btn");
    if(bt){
        bt.style.textShadow = "1em 1em 2em 0.2em #bfccd8;";
    }
}