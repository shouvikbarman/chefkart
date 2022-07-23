import Dish from './Dish'
import '../styles/Popular.css'

function Popular ({popularDishes}) {

    return (
        <div className="popular-container">
            <h1 className="title">Popular Dishes</h1>
            <div className="popular-wrapper">
                {popularDishes.map((dish) => (
                    <div className="dish-color" key={dish.id}>
                        <Dish dish={dish}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Popular