import "./Resume.css";
import Header from "./components/header/Header.js";
import Education from "./components/education/Education";
import resume_data from "./resume.json";

let parsed_info = resume_data.info.map((row_text, index) => {
    return (
        <p className={`info-row-${index}`} key={index}>
            {row_text}
        </p>
    );
});

function Resume() {
    return (
        <div className="Resume">
            <Header
                name={resume_data.name}
                sub_titles={resume_data.sub_titles}
                info={parsed_info}
            ></Header>
            <Education school_list={resume_data.schools}></Education>
        </div>
    );
}

export default Resume;
