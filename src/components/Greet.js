import React from 'react'
//Functional component


// function Greet(){
//     return <h1> Hello </h1>
// }
//---------------------------------------------------------------------------------------------------------------------------
// Arrow function 

// const Greet = (props) =>{
//     return(
//         <div>
//              <h1>Hello {props.name} favo hero is {props.heroname}</h1>
//         {props.children}
//         </div>
       
//     )
// } 
//------------------------------------------------------------------------------------------------------------------------
//Desrtucturing props   method 1
// const Greet = ({name,heroname}) =>{
//     return(
//         <div>
//              <h1>Hello {name} favo hero is {heroname}</h1>
   
//         </div>
       
//     )
// } 

//Desrtucturing props   method 2
const Greet = (props) =>{
    const {name,heroname}=props
    return(
        <div>
             <h1>Hello {name} favo hero is {heroname}</h1>
   
        </div>
       
    )
} 


export default Greet;