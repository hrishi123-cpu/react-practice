import React from 'react'

function Namelist() {
    const names =['hrishi','bala','jay']
    const namelist = names.map((name,index) => <h2 key={index}>{name}</h2>) //using INDEX as a KEY use when items do not have unique id
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
