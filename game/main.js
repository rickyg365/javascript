
// Global Variables
let item_count;

let map_width = window.getComputedStyle(document.documentElement).getPropertyValue('--map-width');
let map_height = window.getComputedStyle(document.documentElement).getPropertyValue('--map-height');
let map_item_width = window.getComputedStyle(document.documentElement).getPropertyValue('--map-item-width');
let map_item_height = window.getComputedStyle(document.documentElement).getPropertyValue('--map-item-height');
let map_gap = window.getComputedStyle(document.documentElement).getPropertyValue('--map-gap');

const max_row_count = window.getComputedStyle(document.documentElement).getPropertyValue('--max-row-count');
const max_col_count = window.getComputedStyle(document.documentElement).getPropertyValue('--max-col-count');

const max_item_count = window.getComputedStyle(document.documentElement).getPropertyValue('--max-item-count');

// DOM Elements
let mapEle = document.getElementById('map');


// Utility Functions


// Main Function, tied to form button
function generateMap() {
    // clear all current maps children
    mapEle.textContent = '';

    // get row and column input
    let r_val = document.getElementById('row-input').value;
    let c_val = document.getElementById('col-input').value;
    
    item_count = parseInt(document.getElementById('items-input').value);

    width = document.getElementById('width-input').value + 'px';
    window.getComputedStyle(document.documentElement).setProperty('--map-width', width);
    

    // if item_count is bigger than max, alert user and return
    if (item_count > max_item_count) {
        alert(`Entries too big, max-row: ${max_row_count} max-col: ${max_col_count}`);
        return;
        // Can also set them to their max value to visually how user how many items can be held

        // r_val = max_row_count;
        // c_val = max_col_count;

        // item_count = max_item_count;
    }

    // Loop Variables
    let new_div;

    for (let i = 1; i <= item_count; i++) {
        // Create new div w/ class="map-item m$"
        new_div = document.createElement('div');

        new_div.classList.add("map-item", `m${i}`)
        
        // Add to map element
        mapEle.appendChild(new_div);
    }

    console.log(`button Clicked: ${item_count} items`);

    // Set CSS variable to correct value
    document.documentElement.style.setProperty("--item-count", item_count);
    document.documentElement.style.setProperty("--row-count", r_val);
    document.documentElement.style.setProperty("--col-count", c_val);
}
