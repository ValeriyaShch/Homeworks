function Winner(props) {
    const {image, vote} = props;
    return (
        <div className="center mt-4">
            <h2>Результати голосування:</h2>
            <h3>Переможець:</h3>
            <img src={image} width={200}/>
            <p>Кількість голосів: {vote}</p>
        </div>
    )
}

export default Winner