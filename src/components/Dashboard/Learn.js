import React from 'react'
import { useParams } from 'react-router'
import Navbar from './Navbar'

function Learn() {
    let { id } = useParams();
    return (
        <div className="dash-container">
            <Navbar />
            <div className="dash-content">
                <h2>
                    This is module No - {id}
                </h2>
            </div>
        </div>
    )
}

export default Learn
