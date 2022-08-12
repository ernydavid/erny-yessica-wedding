document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to ('.image1', 4, {
        y: -20 + '%',
        ease: Power3.easeIn
    })
    .to ('.image2', 4, {
        y: -25 + '%',
        ease: Power3.easeIn
    }, '-=4')
	.to ('.image3', 4, {
        y: -25 + '%',
        ease: Power3.easeIn
    }, '-=4')
	.to ('.image4', 4, {
        y: -45 + '%',
        ease: Power3.easeIn
    }, '-=4')
    .to ('.image5', 4, {
        y: -50 + '%',
        ease: Power3.easeIn
    }, '-=4')
    .to ('.image6', 4, {
        y: -55 + '%',
        ease: Power3.easeIn
    }, '-=4')
	.to ('.blur', 4, {
        y: -55 + '%',
        ease: Power3.easeIn
    }, '-=4')
	.to ('.sec-title', 2, {
		y: -50 + '%',
        opacity: 0,
        ease: Power3.easeIn
    }, '-=4.6')
	.to ('.sub-title', 2, {
		y: -50,
        opacity: 0,
        ease: Power3.easeIn
    }, '-=4.6')
    .to ('.content-title', 5, {
		y: -80 + 'vh',
        opacity: 1,
        ease: Power3.easeIn
    }, '-=5')
    .to ('.content-message', 5, {
		y: -80 + 'vh',
        opacity: 1,
        ease: Power3.easeIn
    }, '-=5')
    
    let scene = new ScrollMagic.Scene({
        triggerElement: '.first-sec',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline)
    .setPin('.first-sec')
    .addTo(controller)
    .addIndicators();

   
})