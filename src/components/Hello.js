import React from 'react'

// const Hello =() =>{
//     return(
//         <div className="dummyClass">
//             <h1>hello</h1>  // using jsx
//         </div>
//     )
// }
const Hello =() =>{
    return React.createElement(
        'div',
        {id:'hello', className: 'dummyClass'},    //attribute
        React.createElement('h1',null,'hello'))     //Without JSX
}
export  default Hello; 