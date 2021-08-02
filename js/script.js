document.addEventListener('DOMContentLoaded', () => {
    var tl = gsap.timeline();

    tl
    .from(".menu-1", {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.5,
        ease: "power3.out",
    })
    .from(".menu-2", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
    }, "-=0.8")
    .from(".menu-3", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
    }, "-=0.8")
    .from(".menu-4", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
    }, "-=0.8")
    .from(".menu-5", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power3.out",
    }, "-=0.8")
    .from(".container-item", {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",
    }, "-=0.8")
    .from(".container-item img", {
        duration: 1,
        y: 300,
        opacity: 0,
        ease: "power3.out",
    }, "-=0.8")
    .from(".bg-hero", {
        duration: 1,
        y: 300,
        opacity: 0,
        ease: "power3.out",
    }, "-=0.8")

    gsap.registerPlugin(ScrollTrigger);

    gsap.from("#section-01",{
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section-01",

        }
    });

    gsap.from("#section-02",{
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section-02",

        }
    });

    gsap.from("#section-03",{
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section-03",

        }
    });

    gsap.from("#section-04",{
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section-04",

        }
    });

    gsap.from("#section-05",{
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: {each: 0.2},
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#section-05",

        }
    });
})