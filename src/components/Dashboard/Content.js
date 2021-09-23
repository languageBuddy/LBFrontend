import React, { useState } from 'react'
import Module from './Module'
import './dash.scss'
import { useSelector, useDispatch } from 'react-redux'

function Content() {
    const audioFiles = useSelector(state => state.audio)
    // console.log(audioFiles)
    return (
        <div className="dash-container">
            <div className="dash-content">
                {
                    audioFiles && audioFiles.map(module => {
                        return <Module key={module.moduleId} {...module} />
                    })
                }
            </div>
        </div >
    )
}

export default Content
