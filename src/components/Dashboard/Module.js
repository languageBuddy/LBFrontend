import React, { useState, useEffect } from 'react'
import './dash.scss'
import { Link } from 'react-router-dom'
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector, useDispatch } from 'react-redux'

function Module(props) {
    const [percentage, setpercentage] = useState(0)

    const { module_id, module_name, description } = props

    const progress = useSelector(state => state.progress)
    const dispatch = useDispatch()
    useEffect(() => {

        if (progress && progress.progressData && progress.progressData[module_id]) {
            setpercentage(progress.progressData[module_id].percentage)
        } else {
            dispatch({
                type: 'MODULE_FIELD',
                payload: {
                    module_id
                }
            })
        }

        if (percentage > 100) {
            setpercentage(100)
        }

    }, [progress.progressData])

    return (
        <Link to={{ pathname: `/dashboard/learn/` + module_id }} className="text-decoration-none">
            <div className="dash-card">
                <ProgressBar className="progressBar" completed={percentage} />
                <div className="dash-icon"><i className="material-icons md-36">face</i></div>
                <p className="dash-title">{module_name}</p>
                <p className="dash-text"> {description}</p>
            </div>
        </Link >
    )
}

export default Module
