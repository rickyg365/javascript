import { useEffect, useState } from "react";
import "./Grid.css";

let Grid = (props) => {
    const [ROW_SIZE, setRowSize] = useState(1);
    const [COLUMN_SIZE, setColumnSize] = useState(1);

    const [ITEMS, setItems] = useState(
        props.items ? props.items : [<div key="0">Item 1</div>]
    );

    useEffect(() => {
        // Calculate rows and columns
        let half_val = Math.floor(ITEMS.length / 2);
        if (ITEMS.length % 2 === 1) {
            setRowSize(half_val);
            setColumnSize(half_val + 1);
        } else {
            setRowSize(half_val);
            setColumnSize(half_val);
        }
        return;
    }, [ITEMS.length]);

    return (
        <div className="main-container">
            <div
                className="main-grid"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${COLUMN_SIZE}, auto)`,
                    gridTemplateRows: `repeat(${ROW_SIZE}, auto)`,
                }}
            >
                {ITEMS}
            </div>
        </div>
    );
};

export default Grid;
