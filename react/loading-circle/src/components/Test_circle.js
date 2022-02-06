import { useEffect, useState } from "react";

import Circle from "./circle-loader/Circle.js";

function TestCircle(props) {
    let [curr_percent, setPercent] = useState(0);
    let [debug_state, setDebug] = useState(props.debug || false);
    console.log(debug_state);

    useEffect(() => {
        let current_timer = setTimeout(() => {
            if (curr_percent >= 100) {
                return;
            }
            if (props.mode === "random") {
                setPercent(Math.floor(Math.random() * 99));
                return;
            } else {
                setPercent(curr_percent + 1);
            }
        }, 2000);
        console.log(current_timer);
    }, [curr_percent, props.mode]);

    return (
        <div className="App">
            <Circle percentage={curr_percent}></Circle>
        </div>
    );
}

export default TestCircle;
