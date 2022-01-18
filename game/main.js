let item_count;

function generateMap() {
    let r_val = document.getElementById('row-input').value;
    let l_val = document.getElementById('col-input').value;
    
    item_count = parseInt(r_val) + parseInt(l_val);

    console.log(`button Clicked: ${item_count} items`)
    
}




