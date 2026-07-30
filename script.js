Shery.imageEffect("#back", {
    style: 5,
    gooey: true,
    config: {
        "gooey": { "value": true },
        "infiniteGooey": { "value": false }, 
        "scrollType": { "value": 0 }
    },
    
    slideStyle: (setScroll) => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY / innerHeight);
        });
    }
});

//for smooth flow
gsap.to(".elem h1", {
    y: "-50%",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1
    }
});