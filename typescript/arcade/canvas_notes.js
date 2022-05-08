/*
Two primitive shapes: 
----------------------------------------------------------------
1. rectangles
2. paths (lists of points connected by lines).


Rectangle
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


Path
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
