import "./Header.css";
function Header(props) {
    return (
        <header className="Header">
            <div className="header-txt">
                <h1 className="name">{props.name}</h1>
                <p className="sub-titles">{props.sub_titles}</p>
                {props.info}
            </div>
            <div className="header-img">
                <img src="https://source.unsplash.com/random/128x128" alt="" />
            </div>
        </header>
    );
}

export default Header;
