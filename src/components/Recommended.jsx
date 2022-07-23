import '../styles/Recommended.css';
import {Link} from 'react-router-dom'
import veg from '../static/veg.png'
import fridge from '../static/fridge.png'
import microwave from '../static/microwave.png'

function Recommended ({dishes}) {
    const eqpobj = {
        Refrigerator : fridge,
        Microwave : microwave
    }
    return(
        <div className="recommended-container">
            <div className="r-header">
                <h1>Recommended</h1>
                <button className="menu-button">Menu</button>
            </div>
    
            {dishes.map((dish) => (
                <div className="recommended-wrapper" key={dish.id}>
                    <div className="info-container">
                    <div className="items">
                        <h3 className="name">{dish.name}</h3>
                        <img className="veg" src={veg} alt='veg'/>
                        <p className="rating">{dish.rating+'★'}</p>
                    </div>
                    <div className="items">
                        <div className="equipments">
                            {dish.equipments.map((equip,i) => (
                                <div className="eqp" key={i}>
                                    <img className="eqpimg" src={eqpobj[equip]} alt='equip'/>
                                    <p className="eqp-text">{equip}</p>
                                </div>
                            ))}
                        </div>
                        <div className="clickable">
                            <Link to='/item'>
                                <p className="ingredients">Ingredients</p>
                                <small className="ingredients-small">View List &gt;</small>
                            </Link>
                        </div>
                    </div>
                    <div className="desc">{dish.description}</div>
                    </div>
                    <div className="image-container">
                        <img src={dish.image} alt={dish.name}/>
                        <button className="add-button">Add +</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Recommended;