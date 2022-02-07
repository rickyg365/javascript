import { useEffect, useState } from "react";
import "./Circle.css";

function Circle(props) {
    // let maxOffset =  440;
    let maxOffset = parseInt(props.maxOffset) || 440;
    let [offset, setOffset] = useState(maxOffset);

    useEffect(() => {
        setOffset(440 - Math.floor((props.percentage * maxOffset) / 100));
    }, [props.percentage, maxOffset]);

    return (
        <div className="circle-loader">
            <div className="inner-container">
                <h1 className="loader-text">
                    {props.percentage}
                    <span className="p-sign">%</span>{" "}
                </h1>
            </div>
            <svg
                width="160"
                height="160"
                viewBox="0 0 160 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    id="loading-bar-clr"
                    cx="80"
                    cy="80"
                    r="70"
                    fill="none"
                    stroke="url(#paint0_linear_2_2)"
                    strokeWidth="20"
                    strokeDasharray={maxOffset}
                    strokeDashoffset={offset}
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_2_2"
                        x1="0"
                        y1="0"
                        x2="160"
                        y2="160"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#76EA81" />
                        <stop offset="1" stopColor="#7696EA" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

export default Circle;