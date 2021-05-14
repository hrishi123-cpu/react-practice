import React from 'react'

function Namelist() {
    const names =['hrishi','bala','jay']
    const namelist = names.map(name => <h2>{name}</h2>) 
    return (
        <div>
            {
             namelist  
            }
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

        </div>
    )
}

export default Namelist
