import "./Navbar.css";
import NavItem from "./Item";

function NavBar() {
    return (
        <div className="nav-container">
            <h1 className="logo">Logo</h1>
            <ul className="nav-list">
                <NavItem text="Home" />
                <NavItem text="About" />
                <NavItem text="Pricing" />
                <NavItem text="Contact" />
            </ul>
        </div>
    );
}

export default NavBar;
