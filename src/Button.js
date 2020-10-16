import React, {useState} from 'react'

function Button({color, backgroundColor, children}){
    const [number, setNumber] = useState(0);
    const handleClick = (e) => {
        e.preventDefault();
        setNumber(number + 1);
    }
    return (
        <button className='button'
         style={{color:`${color}`, backgroundColor:`${backgroundColor}`}}>{children}
         </button>

        // <button className='button' onClick = {handleClick}
        // style={{color:`${color}`, backgroundColor:`${backgroundColor}`}}>
        //     {number}
        // </button>
    )
}


export default Button;