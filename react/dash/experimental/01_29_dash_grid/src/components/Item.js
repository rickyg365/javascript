import "./Item.css";

function NavItem({ text = "Item X", link = "#", icon = "" }) {
    return (
        <li className="item-container">
            <a href={link}>{text}</a>
        </li>
    );
}

export default NavItem;
