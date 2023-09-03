const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var tl = gsap.timeline();

tl.from("#navbar", {y: -10, duration: 1, opacity:0,});
tl.from("#lanpage", {y: -10,opacity:0, duration: 1,duration:2, stagger:1});
tl.from("#chotiheading", {y: -10,opacity:0, duration: 1, stagger:1.5});
tl.to("#footeritem", {y: 20,opacity:1, duration: 1, stagger:1});





var cor=document.querySelector(".mousecorsor");

document.addEventListener("mousemove",function(get){
     cor.style.left = get.x+1+"px"
     cor.style. top= get.y+1+"px"
    
})

document.querySelectorAll(".page2img,#thirdelm").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("#img0"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("#img0"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

