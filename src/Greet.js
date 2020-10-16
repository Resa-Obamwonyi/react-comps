import React from 'react';

function Greet({time}){
    let greet = ''
    if (time >=0 && time <= 11){
        greet = 'Good Morning!!'
    } 
    if (time >= 12 && time <= 16){
        greet = 'Good Afternoon!!'
    }
    if (time >= 17 && time <= 24){
        greet = 'Good Evening!!'
    }

    return (
        <div>
            {greet}
        </div>
        )
    
}


export default Greet;