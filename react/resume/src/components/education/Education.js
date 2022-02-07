import "./Education.css";
import School from "./school/School";

function Education(props) {
    let school_elements = props.school_list.map((school, index) => {
        // Process Data Format a bit
        return (
            <School
                name={school.name}
                city_state={`${school.city} ${school.state}`}
                grad_date={`${school.grad_month} ${school.grad_year}`}
                degree_title={school.degree_title}
                coursework={school.coursework.join(", ")}
                key={index}
            ></School>
        );
    });

    return (
        <div className="education-container">
            <div className="title-bar">
                <h2 className="title">Education</h2>
                <hr className="style-one" />
            </div>
            <div className="schools">{school_elements}</div>
        </div>
    );
}

export default Education;
