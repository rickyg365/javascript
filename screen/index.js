// Dont forget to defer or you get error
let root = document.documentElement;
let screen = document.getElementById("screen");

let display_h = 15;
let display_w = 15;

var mouseDown = false;

document.body.onmousedown = function () {
    mouseDown = true;
};
document.body.onmouseup = function () {
    mouseDown = false;
};

// Grid
let iterate_grid = (w, h, func) => {
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            func(i, j);
        }
    }
};

let generate_uniform_grid = (w, h, default_value) => {
    let output_grid = [];

    for (let i = 0; i < h; i++) {
        let new_row = [];
        for (let j = 0; j < w; j++) {
            new_row.push(default_value);
        }
        output_grid.push(new_row);
    }

    return output_grid;
};

let generate_blank_grid = (w, h) => generate_uniform_grid(w, h, " ");

// Console log grid
let generate_output_string = (grid) => {
    let final_string = "";
    const h = grid.length;
    const w = grid[0].length;

    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            final_string += grid[i][j];
        }
        final_string += "\n";
    }
    return final_string;
};

// Create DOM
let create_dom_tile = (id) => {
    // Give Custom ID?
    let new_tile = document.createElement("div");
    new_tile.id = id;

    // Styles
    new_tile.classList.add("tile");

    // Event Listeners
    // new_tile.addEventListener("click", (e) => {
    //     new_tile.classList.toggle("active-tile");
    // });

    new_tile.addEventListener("mouseover", (e) => {
        // mouseDown && new_tile.classList.toggle("active-tile");
        if (mouseDown) {
            new_tile.classList.toggle("active-tile");
        }

        // Delayed Trail
        // setTimeout(() => {
        //     new_tile.classList.toggle("active-tile");
        // }, 200);
    });

    new_tile.addEventListener("mousedown", (e) => {
        // mouseDown && new_tile.classList.toggle("active-tile");
        new_tile.classList.toggle("active-tile");

        // Delayed Trail
        // setTimeout(() => {
        //     new_tile.classList.toggle("active-tile");
        // }, 200);
    });

    return new_tile;
};

let create_dom_display = (grid, tile_map) => {
    h = grid.length;
    w = grid[0].length;

    root.style.setProperty("--w", w);
    root.style.setProperty("--h", h);

    iterate_grid(w, h, (i, j) => {
        const new_id = `${i}_${j}`;
        let new_t = create_dom_tile(new_id);
        screen.appendChild(new_t);
    });
};

// Create grid
let new_grid = generate_uniform_grid(display_w, display_h, "*");
let grid_string = generate_output_string(new_grid);

create_dom_display(new_grid);

console.log(grid_string);
