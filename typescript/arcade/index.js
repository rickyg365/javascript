"use strict";
/*
Two primitive shapes:
----------------------------------------------------------------
1. rectangles
2. paths (lists of points connected by lines).


Rectangle -
----------------------------------------------------------------
Drawing Functions:
    1. fillRect(x, y, width, height):   Draws a filled rectangle.
    2. strokeRect(x, y, width, height): Draws a rectangular outline.
    3. clearRect(x, y, width, height):  Clears the specified
                                        rectangular area, making
                                        it fully transparent.
Notes:
    1.  x, y represent top-left corner of the rectangle
    2.  all three rectangle functions draw immediately to
        the canvas
----------------------------------------------------------------


Path - drawing functions
----------------------------------------------------------------
Steps:
    1.  First, you create the path.
    2.  Then you use drawing commands to draw into the path.
    3.  Once the path has been created, you can stroke or fill
        the path to render it.

Drawing Functions:
    1. beginPath(): Creates a new path. Once created, future
                    drawing commands are directed into the path
                    and used to build the path up.
    2. closePath(): Adds a straight line to the path, going to
                    the start of the current sub-path.
    3. stroke():    Draws the shape by stroking its outline.
    4. fill():      Draws a solid shape by filling the path's
                    content area.

Path methods: Methods to set different paths for objects.

Notes:
    1.
    2.
    3.
----------------------------------------------------------------


Path2D - Example
----------------------------------------------------------------
var rectangle = new Path2D();
rectangle.rect(10, 10, 50, 50);

var circle = new Path2D();
circle.arc(100, 35, 25, 0, 2 * Math.PI);

ctx.stroke(rectangle);
ctx.fill(circle);
----------------------------------------------------------------

*/
// Connect to Canvas
const canvas = document.getElementById("arcade-display");
// Functions to draw on drawing context
function drawRect(render_context, x, y, w, h, style) {
    /*
            Error: TS2531: Object is possibly 'null'
            Fix: Non-null assertion operator -> !
            help found: stackoverflow.com/questions/40349987
            */
    render_context.fillStyle = style;
    render_context.fillRect(x, y, w, h);
}
function colorSample(render_context, max_w, max_h, num_col, num_rows, color_shift_map) {
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
            render_context.fillStyle = `rgb(${255 - shift_red * shift_step_r}, ${255 - shift_green * shift_step_g}, ${255 - shift_blue * shift_step_b})`;
            render_context.fillRect(x * rect_w, y * rect_h, rect_w, rect_h);
        }
    }
}
const drawPath = (render_context, path_coordinates) => {
    let step = 0;
    for (let item of path_coordinates) {
        if (step === 0) {
            render_context === null || render_context === void 0 ? void 0 : render_context.beginPath();
            render_context === null || render_context === void 0 ? void 0 : render_context.moveTo(item[0], item[1]);
            step++;
        }
        else {
            render_context === null || render_context === void 0 ? void 0 : render_context.lineTo(item[0], item[1]);
        }
    }
    // style
    render_context.strokeStyle = "rgb(200, 200, 200)";
    // Fill
    // render_context?.fill();
    // Stroke
    render_context.lineWidth = 7;
    render_context === null || render_context === void 0 ? void 0 : render_context.stroke();
    render_context === null || render_context === void 0 ? void 0 : render_context.closePath();
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
        // Test drawPath
        let drawn_path = [
            [1, 1],
            [500, 300],
            [550, 380],
        ];
        // drawPath(ctx, drawn_path);
    }
    else {
        // Fallback Code
        console.log("running fallback code...");
    }
};
// Draw Context when dom content is done loading, doesnt wait for style
document.addEventListener("DOMContentLoaded", () => drawContext());
