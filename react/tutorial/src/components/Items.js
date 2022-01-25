import "./Items.css";

function Item(props) {
    return (
        <div className="item-container" draggable="true">
            <div className="title-bar">
                <div className="img">
                    <img src="https://source.unsplash.com/32x32" alt="" />
                </div>
                <h2 className="item-title">{props.name}</h2>
            </div>
            <p className="item-desc">Description: {props.description}</p>
        </div>
    );
}

export default Item;
