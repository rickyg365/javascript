/* Main */
class DisplayStatus {
    // Public
    width: number;
    height: number;
    data: boolean[][];

    constructor(width: number, height: number, input_data: boolean[][] = [[]]) {
        this.width = width;
        this.height = height;

        let new_data = input_data;

        if (input_data[0].length <= 0) {
            new_data = new Array();
            for (let i = 0; i < height; i++) {
                let new_row = new Array();
                for (let j = 0; j < width; j++) {
                    new_row.push(false);
                }
                new_data.push(new_row);
            }
        }

        this.data = new_data;
    }

    checkSquare(x: number, y: number) {
        return this.data[y][x];
    }

    occupy(x: number, y: number) {
        this.data[y][x] = true;
    }

    empty(x: number, y: number) {
        this.data[y][x] = false;
    }

    toggleSquare(x: number, y: number) {
        if (this.data[y][x]) {
            this.data[y][x] = false;
        }

        this.data[y][x] = true;

        // ternary
        // this.data[y][x] = this.data[y][x] === true ? true : false;
    }

    occupyArea(x: number, y: number, w: number, h: number) {
        for (let i = 0; i < w; i++) {
            for (let j = 0; j < h; j++) {
                if (i >= this.width) {
                    console.log("broke i");
                    break;
                }
                if (j >= this.height) {
                    console.log("broke j");
                    break;
                }

                this.occupy(i + x, j + y);
            }
        }
    }
}

// Try Display
let display = new DisplayStatus(3, 3);
display.toggleSquare(1, 1);
console.log(display);
console.log(display.checkSquare(1, 1));

// Connect to Canvas
const canvas = document.getElementById("arcade-display") as HTMLCanvasElement;

// Functions to draw on drawing context
function drawRect(
    render_context: CanvasRenderingContext2D | null,
    x: number,
    y: number,
    w: number,
    h: number,
    style: string = "rgb(150, 150, 150)"
) {
    /* 
            Error: TS2531: Object is possibly 'null' 
            Fix: Non-null assertion operator -> !
            help found: stackoverflow.com/questions/40349987
            */
    render_context!.fillStyle = style;
    render_context!.fillRect(x, y, w, h);
}

function drawFloor(
    render_context: CanvasRenderingContext2D | null,
    x: number,
    floor_w: number,
    floor_h: number,
    style: string = "rgb(150, 150, 150)"
) {
    render_context!.fillStyle = style;
    render_context!.fillRect(x, canvas.height - floor_h, floor_w, floor_h);
}

function colorSample(
    render_context: CanvasRenderingContext2D | null,
    max_w: number,
    max_h: number,
    num_col: number,
    num_rows: number,
    color_shift_map: { r: string; g: string; b: string }
) {
    /* 
    COLOR shift map
    color_axis, dimension_axis
    {
        r: x,
        g: x,
        b: y
    }
    
    what if we want to add an option to not shift that color?
    */
    const rect_w = max_w / num_col;
    const rect_h = max_h / num_rows;

    const rect_per_row = max_w / rect_w;
    const rect_per_col = max_h / rect_h;

    // Color shift per dimension
    let color_shift_x = 255 / num_col;
    let color_shift_y = 255 / num_rows;

    for (let y = 0; y < rect_per_col; y++) {
        for (let x = 0; x < rect_per_row; x++) {
            let shift_direction_r = color_shift_map.r === "x";
            let shift_direction_g = color_shift_map.g === "x";
            let shift_direction_b = color_shift_map.b === "x";

            let shift_red = shift_direction_r ? color_shift_x : color_shift_y;
            let shift_green = shift_direction_g ? color_shift_x : color_shift_y;
            let shift_blue = shift_direction_b ? color_shift_x : color_shift_y;

            let shift_step_r = shift_direction_r ? x : y;
            let shift_step_g = shift_direction_g ? x : y;
            let shift_step_b = shift_direction_b ? x : y;

            render_context!.fillStyle = `rgb(${
                255 - shift_red * shift_step_r
            }, ${255 - shift_green * shift_step_g}, ${
                255 - shift_blue * shift_step_b
            })`;
            render_context!.fillRect(x * rect_w, y * rect_h, rect_w, rect_h);
        }
    }
}

type Coordinate = [number, number];
type PathCoordinates = Coordinate[];

const drawPath = (
    render_context: CanvasRenderingContext2D | null,
    path_coordinates: PathCoordinates,
    style: string = "stroke"
) => {
    let step = 0;
    for (let item of path_coordinates) {
        if (step === 0) {
            render_context?.beginPath();
            render_context?.moveTo(item[0], item[1]);
            step++;
        } else {
            render_context?.lineTo(item[0], item[1]);
        }
    }
    // Style
    if (style === "stroke") {
        render_context!.strokeStyle = "rgb(40, 40, 40)";

        // Stroke
        render_context!.lineWidth = 7;
        render_context?.stroke();
        render_context?.closePath();
    } else {
        // Fill
        render_context!.fillStyle = "lightblue";
        render_context!.fill();
    }
};

// Create Function to draw Context
const drawContext = () => {
    // Check if Fallback is needed
    if (canvas.getContext) {
        // Render Context
        const ctx = canvas.getContext("2d");

        // drawRect(ctx, 10, 10, 50, 50, "rgba(200, 0, 0)");
        let my_shift_color_map = {
            r: "y",
            g: "x",
            b: "x",
        };
        // colorSample(
        //     ctx,
        //     canvas.width,
        //     canvas.height,
        //     32,
        //     3,
        //     my_shift_color_map
        // );
        var count = 0;

        // Initial display
        colorSample(ctx, canvas.width, canvas.height, 2, 2, my_shift_color_map);
        // Set up interval
        let my_interval = setInterval(() => {
            if (count > 15) {
                clearInterval(my_interval);
                return;
            }
            colorSample(
                ctx,
                canvas.width,
                canvas.height,
                3 + count,
                3 + count,
                my_shift_color_map
            );
            // ctx?.restore();
            count++;
        }, 500);

        // Test drawPath
        let drawn_path: PathCoordinates = [
            [1, 1],
            [42, 42],
            [125, 225],
            [500, 300],
            [640, 480],
        ];
        // drawPath(ctx, drawn_path, "stroke");

        // drawFloor(ctx, 0, 640, 100, "lightgreen");

        let display = new DisplayStatus(640, 480);
        display.occupyArea(0, 480 - 100, 640, 100);
        console.log(display);
        console.log(display.checkSquare(20, 380));
    } else {
        // Fallback Code
        console.log("running fallback code...");
    }
};

// Draw Context when dom content is done loading, doesnt wait for style
document.addEventListener("DOMContentLoaded", () => drawContext());
