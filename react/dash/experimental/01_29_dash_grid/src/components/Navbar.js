import "./Navbar.css";
// import constructionLogo from "../construction_logo.svg";
import NavItem from "./Item";

function NavBar() {
    return (
        <div className="nav-container">
            {/* <div className="logo">
                <img src={constructionLogo} alt="Under Construction Logo"></img>
            </div> */}
            <h1 className="logo">Logo</h1>
            <ul className="nav-list">
                <NavItem text="Home" />
                <NavItem text="Projects" />
                <NavItem text="Learning" />
                <NavItem text="Contact" />
            </ul>
        </div>
    );
}

export default NavBar;
