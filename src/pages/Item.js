import {useState, useEffect} from 'react';
import axios from 'axios';
import '../styles/Item.css'
import veggie from '../static/veggie.png'
import fridge from '../static/fridge.png'
import microwave from '../static/microwave.png'
import stove from '../static/stove.jpg'
import loadingif from '../static/loading.gif'

function Item() {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState(null);
    const eqpobj = {
        Refrigerator : fridge,
        Microwave : microwave,
        Stove : stove
    }
    async function getdata() {
        const response = await axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1')
        setLoading(false)
        setData(response.data)
    }

    useEffect(()=>{
        getdata()
    },[])

    return (
         loading ? <img src={loadingif} alt='...Loading' className="loading" /> :
            <div className="item-container">
                <div className="info" >
                    <div className="left">
                        <div className="title">
                            <h1>{data.name}</h1>
                            <p className="rating">4.2★</p>
                        </div>
                        <p className='desc'>Mughlai Masala is a style of cookery
                        developed in the Indian Subcontinent by the
                        Imperial kitchens of theMughal Empire.
                        </p>
                    </div>
                    <div className="right">
                        <img src={veggie} alt='veggie'/>
                    </div>
                </div>
                <div className="portion-size">
                        <div className="heading">
                        <h2>Ingredients</h2>
                    <p className='desc'>For 2 people</p>
                    </div>
                    {
                        Object.entries(data.ingredients).map(([key,value])=>(
                            key === 'appliances' ? 
                            <div className="appliances" key={key}>
                                <h3>Appliances</h3>
                                <div className="app-img-cont">
                                    {value.map((app,i)=>
                                        <div key={i}>
                                            <img className='eqpimg' src={eqpobj[app.name]} alt={app.name} />
                                            {app.name}
                                        </div>
                                    )}
                                </div>
                            </div> :
                            <div className="material" key={key}>
                                <h3>{key}{`(${value.length})`}</h3>
                                <table>
                                    {value.map((item)=>(
                                        <tr key={item.name}>
                                            <td>{item.name}</td>
                                            <td style={{'display':'flex','justify-content':'flex-end'}}>{item.quantity}</td>
                                        </tr>
                                    ))}
                                </table>
                            </div>
                        ))
                    }
                </div>
            </div>
    )
}

export default Item;