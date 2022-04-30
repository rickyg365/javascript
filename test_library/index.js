let to_inline_style = (style) => {
    let output_str = "";
    for (let [key, entry] of Object.entries(style)) {
        console.log(`${key}: ${entry}`);
        output_str += `${key}:${entry};`;
    }
    return output_str;
};

// Indicator, ...(style_override ? style_override : {}),
const recording_indicator = (style_override) => {
    const final_style = {
        // Default Style
        width: "32px",
        height: "32px",
        "background-color": "#adadad",
        "border-radius": "50%",

        // Style Override, make sure its after defaults
        ...style_override,
    };

    return `
    <div class="recording-indicator" style="${to_inline_style(
        final_style
    )}" ></div>
    `;
};

// Control Panel
const control_panel = (style_override) => {
    const final_style = {
        // Default Style
        width: "100%",
        height: "56px",
        padding: "8px",
        display: "flex",
        "align-items": "center",
        "justify-content": "space-between",
        "background-color": "#adadad22",
        "border-radius": "15px",

        // Style Override, make sure its after defaults
        ...style_override,
    };

    // const final_style = to_inline_style({
    //     ...default_style,
    //     ...style_override,
    // });

    return `
    <div class="webcam-control-panel" style="${to_inline_style(
        final_style
    )}" ></div>
    `;
};

// Buttons
const webcam_button = (btn_text, style_override) => {
    const final_style = {
        // Default Style
        height: "40px",
        padding: "4px 8px",
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "background-color": "#cdcdcd",
        "border-radius": "25px",

        // Style Override, make sure its after defaults
        ...style_override,
    };

    // const final_style = to_inline_style({
    //     ...default_style,
    //     ...style_override,
    // });

    return `
    <div class="webcam-control-panel" style="${to_inline_style(
        final_style
    )}" >${btn_text ? btn_text : "No Data"}</div>
    `;
};

// Buttons w/ Icon
const webcam_icon_button = (btn_text, style_override) => {
    const final_style = {
        // Default Style
        height: "40px",
        padding: "4px 8px",
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        "background-color": "#cdcdcd",
        "border-radius": "25px",

        // Style Override, make sure its after defaults
        ...style_override,
    };

    return `
    <div class="webcam-control-panel" style="${to_inline_style(
        final_style
    )}" >${btn_text ? btn_text : "No Data"}</div>
    `;
};

// Get container
const root = document.querySelector(".webcam-preview");
console.log(root);

// Create new indicator element
const r_indicator = recording_indicator({ color: "green" });
console.log(r_indicator);

// Create new panel element
const panel = control_panel();
console.log(panel);

// Create play buttons
const play_btn = webcam_button("Playback");
console.log(play_btn);

// Create download buttons
const download_btn = webcam_button("Download");
console.log(download_btn);

// Append to container
root.insertAdjacentHTML("beforeEnd", r_indicator);
root.insertAdjacentHTML("beforeEnd", panel);

// Get new panel Node
let panel_node = document.querySelector(".webcam-control-panel");

panel_node.insertAdjacentHTML("afterBegin", play_btn);
panel_node.insertAdjacentHTML("afterBegin", download_btn);
