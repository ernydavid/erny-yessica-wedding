let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-sec",
        start: "top",
        end: "100%",
        scrub: true,    
        pin:true,
        lag: 0.5,
    }
})

tl.fromTo(".image1", { y: 0}, {yPercent: -25, duration: 4 });
tl.fromTo(".image1", { filter: 'brightness(1)'}, {filter: 'brightness(1.05)', duration: 4 }, "-=4");
tl.fromTo(".image3", { y: 0}, {yPercent: -35, duration: 4 }, "-=4");
tl.fromTo(".image3", { filter: 'brightness(1)'}, {filter: 'brightness(1.1)', duration: 4 }, "-=4");
tl.fromTo(".image4", { y: 0}, {yPercent: -45, duration: 4 }, "-=4");
tl.fromTo(".image5", { y: 0}, {yPercent: -50, duration: 4 }, "-=4");
tl.fromTo(".image6", { y: 0}, {yPercent: -55, duration: 4 }, "-=4");
tl.fromTo(".image2", { y: 0}, {yPercent: -25, duration: 4 }, "-=4");
tl.fromTo(".image2", { filter: 'brightness(1)'}, {filter: 'brightness(1.1)', duration: 4 }, "-=4");
tl.fromTo(".blur", {y: 100 + 'vh'}, {y: 40 + 'vh', duration: 4 }, "-=4");

tl.fromTo(".sec-title", { autoAlpha: 1}, {autoAlpha: 0, duration: 1 }, "-=4");
tl.fromTo(".sub-title", { autoAlpha: 1}, {autoAlpha: 0, duration: 1 }, "-=4");
tl.fromTo(".content-title", { y: 0}, {y: -60 + 'vh', duration: 4 }, "-=4");
tl.fromTo(".content-title", { autoAlpha: 0}, {autoAlpha: 1, duration: 3 }, "-=3");
tl.fromTo(".content-message", { y: 0}, {y: -60 + 'vh', duration: 4 }, "-=4");
tl.fromTo(".content-message", { autoAlpha: 0}, {autoAlpha: 1, duration: 3 }, "-=3");
tl.fromTo(".line", { y: 0}, {yPercent: -10, duration: 1 }, "-=5");
tl.fromTo(".line", { autoAlpha: 1}, {autoAlpha: 0, duration: 1 }, "-=5");

//section #2

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".second-sec",
        start: "top",
        end: "100%",
        scrub: true,    
        pin:true,
        lag: 0.5,
    }
})



tl2.fromTo( ".sec2-image4", {scale: 2}, {scale: 1, duration: 4})
tl2.fromTo( ".sec2-image4", {yPercent: 50}, {yPercent: 0, duration: 4}, "-=4")
tl2.fromTo( ".sec2-image4", {autoAlpha: 0}, {autoAlpha: 1, duration: 1},"-=4")
tl2.fromTo( ".sec2-image4", {filter: 'blur(1rem)'}, {filter: 'blur(0rem)', duration: 4},"-=4")

tl2.fromTo( ".sec2-image2", {yPercent: -20}, {yPercent: 0, duration: 2}, "-=4")
tl2.fromTo( ".sec2-image7", {yPercent: 20}, {yPercent: 0, duration: 3}, "-=4")
tl2.fromTo( ".sec2-image3", {yPercent: -40}, {yPercent: 0, duration: 6}, "-=4")
tl2.fromTo( ".sec2-image6", {yPercent: 40}, {yPercent: 0, duration: 6}, "-=4")
tl2.fromTo( ".sec2-image5", {scale: 2}, {scale: 1, duration: 4}, "-=4")

tl2.fromTo( ".sub-title-sec2", {autoAlpha: 1}, {autoAlpha: 0, duration: .5})
tl2.fromTo( ".line-sec2", {autoAlpha: 1}, {autoAlpha: 0, duration: .5}, "-=6")
tl2.fromTo( ".line2-sec2", {autoAlpha: 0}, {autoAlpha: 1, duration: 1}, "-=1")

//section #3

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".third-sec",
        start: "top",
        end: "100%",
        scrub: true,    
        pin:true,
        lag: 0.5,
    }
})

tl3.fromTo( ".line-sec3", {autoAlpha: 1}, {autoAlpha: 0, duration: 1})
tl3.fromTo( ".sec3-image1", {yPercent: -15}, {yPercent: 0, duration: 3}, "-=1")
tl3.fromTo( ".sec3-image2", {autoAlpha: 0}, {autoAlpha: 1, duration: 4}, "-=1")

tl3.fromTo( ".sec3-image5", {yPercent: 45}, {yPercent: 0, duration: 6})
tl3.fromTo( ".sec3-image4", {yPercent: 55}, {yPercent: 0, duration: 6}, "-=6")
tl3.fromTo( ".sec3-image4", {xPercent: -15}, {xPercent: 0, duration: 6}, "-=6")
tl3.fromTo( ".sec3-image3", {yPercent: 55}, {yPercent: 0, duration: 6}, "-=6")
tl3.fromTo( ".content-title3", {autoAlpha: 0}, {autoAlpha: 1, duration: 4}, "-=1")

tl3.fromTo( ".content-message3", {autoAlpha: 0}, {autoAlpha: 1, duration: 4}, "-=5")
tl3.fromTo( ".content-message3", {yPercent: 30}, {yPercent: 0, duration: 4}, "-=4")


tl3.fromTo( ".line2-sec3", {autoAlpha: 0}, {autoAlpha: 1, duration: 1}, "-=4")


//section #4

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".forth-sec",
        start: "top",
        end: "150%",
        scrub: true,    
        pin:true,
        lag: 0.5,
    }
})

tl4.fromTo(".sec4-image1", {yPercent: 0}, {yPercent: -10, duration: 2})
tl4.fromTo(".sec4-image2", {yPercent: 30}, {yPercent: 0, duration: 4}, "-=2")
tl4.fromTo(".sec4-image3", {yPercent: 25}, {yPercent: 0, duration: 4}, "-=4")
tl4.fromTo(".sec4-image4", {yPercent: 20}, {yPercent: 0, duration: 4}, "-=4")
tl4.fromTo(".sec4-image6", {xPercent: -80}, {xPercent: 80, duration: 7}, "-=1")
tl4.fromTo(".content-title4", {autoAlpha: 0}, {autoAlpha: 1, duration: 2}, "-=7")
tl4.fromTo(".content-title4", {xPercent: -30}, {xPercent: 0, duration: 2}, "-=7")
tl4.fromTo(".content-message4", {autoAlpha: 0}, {autoAlpha: 1, duration: 2}, "-=7")
tl4.fromTo(".content-message4", {xPercent: -110}, {xPercent: 0, duration: 2}, "-=7")

tl4.fromTo( ".line-sec4", {autoAlpha: 0}, {autoAlpha: 1, duration: 2})

//section #5

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".fifth-sec",
        start: "top",
        end: "150%",
        scrub: true,
        pin:true,
        lag: 0.5,
    }
})

tl5.fromTo(".sec5-image1", {yPercent: 50, scale: 1}, {yPercent: 40, scale: 1.5, transformOrigin: "bottom", ease: Power3.easeIn, duration: 5})
tl5.fromTo(".sec5-image1", {yPercent: 40, scale: 1.5}, {yPercent: -10, scale: 0.7, transformOrigin: "bottom",  ease: Power3.easeOut, duration: 5})


tl5.fromTo(".content-message5", {autoAlpha: 0}, {autoAlpha: 1, duration: 2}, "-=4")
tl5.fromTo(".line-sec5", {autoAlpha: 0}, {autoAlpha: 1, duration: 2}, "-=2")
tl5.fromTo(".sec5-image2", {autoAlpha: 0}, {autoAlpha: 1, duration: 2}, "-=2")