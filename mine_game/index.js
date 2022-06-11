// Used defer
// window.addEventListener('DOMContentLoaded', () => {
// })

const grid_items = document.querySelectorAll(".grid-item");

// Hard Coded Data, 5 breaks
let grid_data = [
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "1", "1", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "1", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "1", "0", "0", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
];

/* Convert Key (Decimal) -> grid tuple
Example: 14 -> 1, 3
Formula: 14//10 -> 1, 14%10 -> 4
*/

let convert_decimal = (decimal) => {
    let row = Math.floor(decimal / 10);
    let col = decimal % 10;

    return [row, col];
};

let convert_coord = (coord) => {
    let r = coord[0];
    let c = coord[1];

    return r * 10 + c;
};

/* Find Empty Neighbors (coord) -> [ [empty_neighbor_coord], [...], ...]
Example: 
*/

let empty_neighbors = (start_coord) => {
    let empty = [];

    let row = start_coord[0];
    let col = start_coord[1];
    const upper_row = 9;
    const upper_col = 9;

    // Check Up
    if (row >= 1) {
        if (grid_data[row - 1][col] != 1) {
            empty.push([row - 1, col]);
            console.log("u");
        }
    }
    // Check Down
    console.log(row, upper_row, row < upper_row);
    if (row < upper_row) {
        if (grid_data[row + 1][col] != 1) {
            empty.push([row + 1, col]);
            console.log("d");
        }
    }

    // Check Left
    if (col >= 1) {
        if (grid_data[row][col - 1] != 1) {
            empty.push([row, col - 1]);
            console.log("l");
        }
    }
    // Check Right
    if (col < upper_col && grid_data[row][col + 1] != 1) {
        console.log("r", grid_data[row][col + 1]);
        empty.push([row, col + 1]);
    }

    // Check Diagonals
    // Upper Left
    // Upper Right
    // Lower Left
    // Lower Right

    return empty;
};

// Attach Event Listeners
grid_items.forEach((val, key) => {
    val.addEventListener("click", (e) => {
        let coord = convert_decimal(key);
        console.log(coord);
        console.log(convert_coord(coord));

        // Break Condition
        if (grid_data[coord[0]][coord[1]] == 1) {
            alert("Oops you goofed!");
            const gm_over = document.getElementsByClassName("game-over");

            return;
        }

        // Else
        // Activate Parent
        val.classList.add("grid-active");

        // Activate non break neighbors
        console.log(coord);
        empty_n = empty_neighbors(coord);
        empty_n.forEach((val) => {
            let new_d = convert_coord(val);
            console.log("New D", new_d);
            grid_items[new_d].classList.add("grid-active");
        });
    });
});
