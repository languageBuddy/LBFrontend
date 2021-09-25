import React from 'react'
import './dash.scss'
import { Link } from 'react-router-dom'

function Card(props) {
    return (
        <Link to={{ pathname: `/dashboard/learn/` + props._id }} className="text-decoration-none">
            <div className="dash-card">
                <div className="dash-icon"><i className="material-icons md-36">face</i></div>
                <p className="dash-title">Profile {props._id}</p>
                <p className="dash-text"> Click to see or edit your profile page.</p>
            </div>
        </Link>
    )
}

export default Card
