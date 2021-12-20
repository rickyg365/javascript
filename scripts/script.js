// Web Visualizer

// 12-18-21

// Create a grid
let createBlankGrid = (rows, columns) => {
    let empty_obj = {
        "visible": false,
        "color": "green",
        "empty": true
    }
    let new_grid = new Array(rows);

    for (let i=0; i < rows; i++) {
        new_grid[i] = new Array(columns).fill(empty_obj);
    }
    return new_grid;
}

// Iterate through grid and perform func on each value can use a double map?
let iterateGrid = (grid, func) => {
    let output_grid = [];

    for (let i=0; i < grid.length; i++) {
        let new_row = []
        for (let j=0; j < grid[0].length; j++) {
            new_row.push(func(grid[i][j]));
            // console.log(grid[i][j]);
        }
        output_grid.push(new_row);
    }
    
    return output_grid;
}

// Debug Print
let printGrid = (grid) => {
    for (let i=0; i < grid.length; i++) {
        console.log(`\n[${i}]`);
        for (let j=0; j < grid[0].length; j++) {
            console.log(`[${i}][${j}] -> `, grid[i][j]);
        }
    }
    
    return 1;
}

function resetDisplay() {
    let visual_section = document.getElementById("visual");

    while (visual_section.firstChild) {
        visual_section.removeChild(visual_section.firstChild);
    }
}

function updateDisplay() {
    // Get Data
    let form = document.getElementById('mydata');

    // prevent form from refreshing
    let handleForm = (event) => event.preventDefault(); 
    form.addEventListener('submit', handleForm);

    let rows = form.elements["row"].value;
    let cols = form.elements['col'].value;


    // Create Display
    const row_num = parseInt(rows);
    const col_num = parseInt(cols);

    let display = createBlankGrid(row_num, col_num);

    printGrid(display);
    // setting up dom
    resetDisplay();

    let new_display = iterateGrid(display, (item) => {
        // do something for each item
        let new_element = document.createElement('div');
        new_element.classList.add("square", "flex-ctr")

        // return value for output grid
        return new_element;
    })
    let chosen_parent_element = document.getElementById("visual")

    // Iterate through new display
    for (let i=0; i < new_display.length; i++) {
        let new_row_div = document.createElement('div');
        new_row_div.classList.add(`row-${i}`, "flex-ctr-gap");
        for (let j=0; j < new_display[0].length; j++) {
            new_row_div.appendChild(new_display[i][j]);
        }
        chosen_parent_element.appendChild(new_row_div);
    }

    return 1;
}


// Main Function
function main() {
    // console.log(new_display);

    return [ 1, "PERFECT"];
}

// Run Main
let [ exit_status, error_code ] = main();


// Exit Status
if (exit_status === 1){
    console.log("\n[ EXIT STATUS ]: PERFECT   (^-^)")
} else if (exit_status === 0) {
    console.log(`\n[ EXIT STATUS ]: FAILED -> ${error_code}`)
}



