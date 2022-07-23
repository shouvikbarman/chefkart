function Dish ({dish}) {
    return (
        <div className="dish-container" style={{ backgroundImage: `url(${dish.image})`}}>
            <p>{dish.name}</p>
            {/* <img className="popular-dish" src={dish.image} alt={dish.name}/> */}
        </div>
    )
}

export default Dish;