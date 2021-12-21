// Web Visualizer - Class Version

// 12-20-21


// Grid Class
class Grid {
    constructor(rows, cols, default_blank) {
        // Creates 2D Grid
        this.rows = parseInt(rows);
        this.cols = parseInt(cols);
        this.default_blank = {
            "visible": false,
            "color": "green",
            "empty": true
        }
        // Starting blank grid
        this.data = this.createBlankGrid();
    }
    
    iterateGrid(func) {
        // Iterate through grid and perform func on each value can use a double map?
        let output_grid = [];

        for (let i=0; i < this.rows; i++) {
            let new_row = []
            for (let j=0; j < this.cols; j++) {
                new_row.push(func(this.data[i][j]));
                // console.log(grid[i][j]);
            }
            output_grid.push(new_row);
        }
        
        return output_grid;
    }

    printGrid() {
        for (let i=0; i < this.rows; i++) {
            console.log(`\n[${i}]`);
            for (let j=0; j < this.cols; j++) {
                console.log(`[${i}][${j}] -> `, this.data[i][j]);
            }
        }
    }

    createBlankGrid() {
        // In other words reset grid
        let new_grid = new Array(this.rows);

        for (let i=0; i < rows; i++) {
            new_grid[i] = new Array(this.cols).fill(this.default_blank);
        }
        return new_grid;

    }
}


class displaySectionHandler {
    constructor(gridObj) {
        this.connection_element = document.getElementById("visual");
        this.gridObj = gridObj;
    }
    
    resetDisplay() {
        while (this.connection_element.firstChild) {
            this.connection_element.removeChild(this.connection_element.firstChild);
        }
    }

    updateDisplay() {
        this.resetDisplay();

        // create new grid/2d array consisting of a single dom element
        let new_display = this.gridObj.iterateGrid((item) => {
            let new_element = document.createElement('div');
            new_element.classList.add("square", "flex-ctr");

            return new_element;
        })

        // Iterate through new display
        for (let i=0; i < new_display.length; i++) {
            // Create row container
            let new_row_div = document.createElement('div');
            new_row_div.classList.add(`row-${i}`, "flex-ctr-gap");

            for (let j=0; j < new_display[0].length; j++) {
                new_row_div.appendChild(new_display[i][j]);
            }
            this.connection_element.appendChild(new_row_div);
        }

        return 1;
    }
}

// Connect to html


function handleSubmit() {
    let form = document.getElementById('mydata');
    let handleForm = (event) => event.preventDefault();

    form.addEventListener('submit', handleForm);

    let new_grid = gridObj(form.elements["row"].value, form.elements['col'].value);
    let screen = displaySectionHandler(new_grid);
    screen.updateDisplay()
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





