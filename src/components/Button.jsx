import '../styles/Button.css'
import {useState} from 'react'

function Button ({index}) {
    const [click,setClick] = useState(false)
    return (
        <button onClick={()=>setClick(!click)} 
        className={click ? 'clicked' : 'unclicked'}>
        
                {index%2===0 ? 'Indian' : 'Italian'}
        </button>
    )
}

export default Button