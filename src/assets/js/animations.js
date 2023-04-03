gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
const laptopScreen = window.matchMedia('(min-width: 1024px)');

if(laptopScreen.matches) {
    // tl.fromTo(
    //     '.logo', {
    //         y: -50,
    //         opacity: 0
    //     }, 
    //     {
    //         y: 0,
    //         opacity: 1,
    //         duration: 1
    //     }
    // )
    // .fromTo(
    //     '.nav_list li', {
    //         y: -50,
    //         opacity: 0,
    //     }, 
    //     {
    //         y: 0,
    //         opacity: 1,
    //         duration: .5,
    //         stagger: .5,
    //     }
    // )
    // .fromTo(
    //     '.header_order', {
    //         y: -50,
    //         opacity: 0,
    //     }, 
    //     {
    //         y: 0,
    //         opacity: 1,
    //         duration: .5,
    //     },
    //     5
    // )

    gsap.to('.main_title', {
        scrollTrigger: {
            trigger: '#main',
            start: '10% 0',
            end: '+=300 ',
            scrub: true,
        },
        yPercent: -50,
        duration: 2
    });
    gsap.to('.main-btn_group', {
        scrollTrigger: {
            trigger: '#main',
            scrub: true,
            start: '10% 0',
            end: '+=300',
        },
        yPercent: -60,
        duration: 3
    });
    gsap.to('.hero_png', {
        scrollTrigger: {
            trigger: '#main',
            scrub: true,
            start: '200',
            end: '+=700',
        },
        xPercent: -120,
        duration: 8
    });
    gsap.to('.train_png', {
        scrollTrigger: {
            trigger: '#main',
            scrub: true,
            start: '200',
            end: '+=700',
        },
        xPercent: 120,
    });

    const img = gsap.utils.toArray('.hero_img');
    const heroTitle = gsap.utils.toArray('.hero_title');

    gsap.from(img, {
        scrollTrigger: {
            trigger: '#hero',
            start: '-100 center',
            end: '+=400',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left center',
        duration: 3
    });
    gsap.from(heroTitle, {
        scrollTrigger: {
            trigger: '#hero',
            start: '-100 center',
            end: '+=400',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'top center',
        duration: 3
    });
    
    // Херо
    gsap.from('.chaos_title', {
        scrollTrigger: {
            trigger: '#chaos',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        autoAlpha: 0,
    });
    gsap.from('.chaos_subtitle', {
        scrollTrigger: {
            trigger: '#chaos',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 150,
        opacity: 0,
        autoAlpha: 0,
    });
    gsap.from('.chaos_img', {
        scrollTrigger: {
            trigger: '#chaos',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });

    // Доставка
    gsap.from('.delivery_title', {
        scrollTrigger: {
            trigger: '#delivery',
            start: '-150 center',
            end: '+=600',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });

    const tlDelivery = gsap.timeline();

    tlDelivery
    .from('#delivery', {
        scrollTrigger: {
            trigger: '#delivery',
            start: '0 0',
            scrub: true,
            pin: true,
        },
    })
    .from('.delivery_subtitle', {
        scrollTrigger: {
            trigger: '#delivery_wrapper',
            start: '-150 0',
            scrub: true,
        },
        y: 30,
    })
    .from('.delivery_text', {
        scrollTrigger: {
            trigger: '#delivery_wrapper',
            start: '-120 0',
            scrub: true,
        },
        y: 60,
    })
    .from('.delivery_link', {
        scrollTrigger: {
            trigger: '#delivery_wrapper',
            start: '-100 0',
            scrub: true,
        },
        y: 80,
    })
    .from('.delivery_img', {
        scrollTrigger: {
            trigger: '#delivery_wrapper',
            start: '-100 0',
            scrub: true,
        },
        scale: 0
    })
        
    // Партнеры
    const PartnersImg = gsap.utils.toArray('.partner_img');

    gsap.from(PartnersImg, {
        scrollTrigger: {
            trigger: '#delivery_wrapper',
            start: '450 0',
            end: '+=400',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left center',
        duration: 3
    })

    // Что это такое
    gsap.from('.whatIsIt_title', {
        scrollTrigger: {
            trigger: '#whatIsIt',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });
    gsap.from('.whatIsIt_text', {
        scrollTrigger: {
            trigger: '#whatIsIt',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 150,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });

    // Что это такое
    const whats = gsap.utils.toArray('.whats_block');
    gsap.from(whats, {
        scrollTrigger: {
            trigger: '#whatIsIt',
            start: '-350 0',
            end: '+=600',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left center',
        duration: 3
    })

    // Продукция
    gsap.from('.production_title', {
        scrollTrigger: {
            trigger: '#production',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });
    gsap.from('.production_text', {
        scrollTrigger: {
            trigger: '#production',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 150,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });
    const production = gsap.utils.toArray('.production_item');

    gsap.from('#production', {
        scrollTrigger: {
            trigger: '#production',
            start: '0 0',
            scrub: true,
            pin: true,
        },
    })

    gsap.from(production, {
        scrollTrigger: {
            trigger: '#production',
            start: '0 0',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left center',
        duration: 3
    })

    gsap.from('.production_link', {
        scrollTrigger: {
            trigger: '#production',
            start: '0',
            end: '+=800',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });

    // Надежность
    gsap.from('.reliability_title', {
        scrollTrigger: {
            trigger: '#reliability',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });
    gsap.from('.reliability_text', {
        scrollTrigger: {
            trigger: '#reliability',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 150,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });
    const reliability = gsap.utils.toArray('.reliability_item');
    gsap.from(reliability, {
        scrollTrigger: {
            trigger: '#reliability',
            start: '-400 0',
            end: '+=400',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left center',
    })

    // Клиенты
    gsap.from('.clients_title', {
        scrollTrigger: {
            trigger: '#clients',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });
    gsap.from('.clients_img', {
        scrollTrigger: {
            trigger: '#clients',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        x: 200,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });

    const clients = gsap.utils.toArray('.clients_list');
    gsap.from(clients, {
        scrollTrigger: {
            trigger: '#clients',
            start: '-400 0',
            end: '+=400',
            scrub: true,
        },
        x: 100,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left',
    })

    const clientsItems = gsap.utils.toArray('.clients_items');
    gsap.from(clientsItems, {
        scrollTrigger: {
            trigger: '#clients',
            start: '-200 0',
            end: '+=600',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left center',
    })

    // Процессы
    gsap.from('.process_title', {
        scrollTrigger: {
            trigger: '#process',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });
    gsap.from('.process_text', {
        scrollTrigger: {
            trigger: '#process',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 150,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });

    const process = gsap.utils.toArray('.process_items');
    gsap.from(process, {
        scrollTrigger: {
            trigger: '#process',
            start: '-200 0',
            end: '+=200',
            scrub: true,
        },
        x: 100,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left',
    })

    // О нас
    gsap.from('.about_title', {
        scrollTrigger: {
            trigger: '#about',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 100,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });
    gsap.from('.about_text', {
        scrollTrigger: {
            trigger: '#about',
            start: '-150 center',
            end: '+=400',
            scrub: true,
        },
        y: 150,
        opacity: 0,
        autoAlpha: 0,
        duration: 1
    });

    const about = gsap.utils.toArray('.about_items');
    gsap.from(about, {
        scrollTrigger: {
            trigger: '#about',
            start: '-200 0',
            end: '+=200',
            scrub: true,
        },
        x: 100,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left',
    })
    gsap.from('.about_right', {
        scrollTrigger: {
            trigger: '#about',
            start: '-200 0',
            end: '+=200',
            scrub: true,
        },
        x: 100,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left',
    })

    const awards = gsap.utils.toArray('.awards_items');
    gsap.from(awards, {
        scrollTrigger: {
            trigger: '#awards',
            start: '-800 0',
            end: '+=400',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left center',
    })

    // Связь
    gsap.from('#connection', {
        scrollTrigger: {
            trigger: '#awards',
            start: '-200 0',
            end: '+=300',
            scrub: true,
        },
        scale: 0,
        opacity: 0,
        stagger: 1,
        transforOrigin: 'left center',
    })
}