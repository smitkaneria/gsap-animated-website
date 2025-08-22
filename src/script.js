// Ensure ScrollTrigger is available in GSAP from CDN
if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
}

function page1Animation(){
    var tl = gsap.timeline()
tl.from("nav h1,nav h4, nav button",{
    y:-30,
    duration:0.7,
    opacity:0,
    stagger:0.15
})
tl.from(".center-part1 h1",{
    x:-600,
    opacity:0,
})

tl.from(".center-part1 p",{
    x:-400,
    opacity:0,
    
})

tl.from(".center-part1 button",{
    opacity:0,  
})

tl.from(".center-part2 img",{
    opacity:0,
 },"-=0.1") // delay in timeline

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    stagger:0.15
})
}
function page2Animation(){
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:false,
        start:"top 50%",
        scrub:1,
        end:"top -50%"
    }
})
tl2.from(".services",{
    y:-30,
    opacity:0,
    duration:1
})
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1,
    stagger:0.2
},"anim1")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1,
    stagger:0.2
},"anim1")
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1,
    stagger:0.2
},"anim2")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1,
    stagger:0.2
},"anim2")
tl2.from(".elem.line3.left",{
    x:-300,
    opacity:0,
    duration:1,
    stagger:0.2
},"anim3")
tl2.from(".elem.line3.right",{
    x:300,
    opacity:0,
    duration:1,
    stagger:0.2
},"anim3")
tl2.from(".elem.line4.left",{
    x:-300,
    opacity:0,
    duration:1,
    stagger:0.2
},"anim4")
tl2.from(".elem.line4.right",{
    x:300,
    opacity:0,
    duration:1,
    stagger:0.2
},"anim4")
}
page1Animation();
page2Animation();