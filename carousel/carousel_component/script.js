// Carousel Elements
const carousel_container = document.querySelector(".slider-container");
const carousel = document.querySelector(".slider");
const carousel_imgs = document.querySelectorAll(".slider-img > img");

// Carousel Buttons
const prev_btn = document.getElementById("prev");
const next_btn = document.getElementById("next");

// Control Carousel
let current_index = 0;

let iterate_next = () => {
    current_index += 1;

    // Check if out of max bound
    if (current_index >= 4) {
        // Restart to beggining
        // current_index = 0;

        // Prevent Growth
        current_index -= 1;
    }

    // Update active carousel
    carousel_imgs.forEach((val, idx) => {
        val.src = `./data/${current_index + idx + 1}.jpg`;
    });
};

let iterate_prev = () => {
    current_index -= 1;

    // Check if out of min bound
    if (current_index <= 0) {
        current_index = 0;
    }

    // Update active carousel
    carousel_imgs.forEach((val, idx) => {
        val.src = `./data/${current_index + idx + 1}.jpg`;
    });
};

// Button Event Listeners
prev_btn.addEventListener("click", () => {
    // Cycle to previous image
    iterate_prev();
});

next_btn.addEventListener("click", () => {
    // Cycle to next image
    iterate_next();
});
