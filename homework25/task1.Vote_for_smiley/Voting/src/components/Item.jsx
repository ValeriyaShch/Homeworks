function Item(props) {
    const {id, image, vote, onClick} = props;

    return (
        <>
            <img data-id={id} src={image} onClick={onClick} width={200}/>
            <span>{vote}</span>
        </>

    )
}

export default Item