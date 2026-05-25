const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,0.75)";
        navbar.style.padding = "16px 8%";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.background = "rgba(0,0,0,0.35)";
        navbar.style.padding = "20px 8%";
        navbar.style.boxShadow = "none";

    }

});

const revealElements = document.querySelectorAll(
    ".info-card, .galeria-item, .actividad-card, .porque-card, .section-title, .container"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < triggerBottom){

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const cards = document.querySelectorAll(
    ".actividad-card, .porque-card, .info-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(circle at ${x}px ${y}px,
        rgba(240,179,90,0.18),
        #1d1d1d 60%)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#1d1d1d";

    });

});