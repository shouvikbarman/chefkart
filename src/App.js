import './styles/App.css';
import Popular from './components/Popular' 
import Recommended from './components/Recommended'
import clock from './static/clock.png'
import calendar from './static/calendar.png'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Button from './components/Button';
import loadingif from './static/loading.gif'
function App() {

  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(true)
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-GB', {
  day: 'numeric', month: 'short', year: 'numeric'
})

  async function getdata () {
    try {
      const response = await axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
      setLoading(false)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getdata();
  },[])

  return (
    <div className="App">
      <div className="header"></div>
      <div className="date-time">
        <div className="date">
          <img src={clock} alt='clock'/>
          <p>{formattedDate}</p>
        </div>
        <div className="time">
          <img src={calendar} alt='calendar'/>
          <p>10:30PM - 12:30PM</p>
        </div>
      </div>
      <div className="buttons">
        {[...Array(10)].map((x,i)=> (
          <Button index={i} key={i}/>
        ))}
      </div>

    { loading ? <img src={loadingif} alt='...Loading' className="loading" /> :
      <><Popular popularDishes={data.popularDishes}/>
          <Recommended dishes={data.dishes}/>
      </>
    }
    </div>
  );
}

export default App;
