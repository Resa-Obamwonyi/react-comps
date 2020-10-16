import React, {useState} from 'react'

function Form({handleThings, text}){
    const handleChange= (e) => {
        handleThings(e.target.value)
    }
    return (
        <form className='form-class'>
            <input onChange={handleChange} placeholder="Write Something" value={text}/>
        </form>
    )
}


export default Form;