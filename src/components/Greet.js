import React from 'react'
//Functional component


// function Greet(){
//     return <h1> Hello </h1>
// }

// Arrow function 

const Greet = (props) =>{
    return(
        <div>
             <h1>Hello {props.name} favo hero is {props.heroname}</h1>
        {props.children}
        </div>
       
    )
} 

export default Greet;