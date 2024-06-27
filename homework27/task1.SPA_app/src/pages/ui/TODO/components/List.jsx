import Item from "./Item.jsx";

function List(props) {
    const { values } = props;
    return (
        <ul className="listwrapper">
            {values.map((item, index) => {
                return <Item key={index} text={item} />
            })}
        </ul>
    )
}

export default List
