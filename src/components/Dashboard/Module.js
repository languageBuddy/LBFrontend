import React from 'react'
import './dash.scss'
import { Link } from 'react-router-dom'

function Module(props) {
    return (
        <Link to={{ pathname: `/dashboard/learn/` + props.module_id }} className="text-decoration-none">
            <div className="dash-card">
                <div className="dash-icon"><i className="material-icons md-36">face</i></div>
                <p className="dash-title">{props.module_name}</p>
                <p className="dash-text"> {props.description}</p>
            </div>
        </Link>
    )
}

export default Module
