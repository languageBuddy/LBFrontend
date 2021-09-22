import React, { useState } from 'react'
import Card from './Card'
import './dash.scss'

function Content() {
    const [state, setstate] = useState([
        { _id: 1 },
        { _id: 2 },
        { _id: 3 },
        { _id: 4 },
        { _id: 5 },
        { _id: 6 },
        { _id: 7 },
        { _id: 8 }
    ])

    return (
        <div className="dash-container">
            <div className="dash-content">
                {
                    state.map(card => {
                        return <Card key={card._id} {...card} />
                    })
                }
            </div>
        </div >
    )
}

export default Content
