window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

const cards = document.querySelectorAll(".card, .project-card");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight / 1.15;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease";
});