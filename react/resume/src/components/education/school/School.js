import "./School.css";
function School(props) {
    return (
        <div className="school-container">
            <div className="first-line">
                <h4 className="school-name">
                    {props.name}
                    <span className="school-city-state">
                        , {props.city_state}
                    </span>
                </h4>
                <h4 className="grad-date">
                    Graduation:
                    <span className="grad-month-year"> {props.grad_date}</span>
                </h4>
            </div>
            <h4 className="degree-title">{props.degree_title}</h4>
            <h4 className="coursework">
                Coursework:
                <span className="relevant-courses"> {props.coursework}</span>
            </h4>
        </div>
    );
}

export default School;
