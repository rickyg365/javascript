import "./List.css";
import Item from "./Items.js";

function List(props) {
    let new_list = [];
    const sample_items = [
        {
            name: "Item 1",
            img_url: "https://source.unsplash.com/32x32",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum fugit veritatis cupiditate ratione? Est voluptate perferendis id enim harum reiciendis error ratione. Iste, voluptate sint quas similique unde architecto ipsa cum alias omnis natus minus",
        },
        {
            name: "Item 2",
            img_url: "https://source.unsplash.com/32x32",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum fugit veritatis cupiditate ratione? Est voluptate perferendis id enim harum reiciendis error ratione. Iste, voluptate sint quas similique unde architecto ipsa cum alias omnis natus minus",
        },
        {
            name: "Item 3",
            img_url: "https://source.unsplash.com/32x32",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illum fugit veritatis cupiditate ratione? Est voluptate perferendis id enim harum reiciendis error ratione. Iste, voluptate sint quas similique unde architecto ipsa cum alias omnis natus minus",
        },
    ];

    for (let item in sample_items) {
        const current_item = sample_items[item];
        new_list.push(
            <Item
                name={current_item.name}
                img_url={current_item.img_url}
                description={current_item.description}
            ></Item>
        );
        // console.log(sample_items[item]);
    }
    // console.table(new_list);

    return (
        <div className="list-component">
            <h2 className="list-title">{props.title}</h2>
            <div className="list-container">{new_list}</div>
        </div>
    );
}

export default List;
