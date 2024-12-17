import React from 'react'
import MyNavigation from '../components/MyNavigation'

function MyLayoutHeader({children}) {
    return (
        <div className='d-flex flex-column position-relative justify-content-between' style={{ height:'635px', width:'375px', border:'1px solid #5551ff'}}>
            <MyNavigation />
            {children}
        </div>
    )
}

export default MyLayoutHeader