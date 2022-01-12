const buttons = document.querySelectorAll("[carousel-btn]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselBtn === "next" ? 1 : -1;
    })
})

