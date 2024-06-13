function Apiform() {
    return (
        <div className="mb-3 apiform input-group">
            <span className="input-group-addon p-2">http://swapi.dev/api/</span>
            <input className="form-control" type="text" placeholder="people/1/"/>
            <button className=" button">Get info</button>
        </div>
    )
}

export default Apiform