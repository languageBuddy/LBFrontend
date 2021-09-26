import React from 'react'
import Error from '../assets/img/not-found.png'

function NotFound() {
    return (
        <div >
            <img src={Error} width="100%" style={{ height: "100vh" }} />
        </div>
    )
}

export default NotFound
