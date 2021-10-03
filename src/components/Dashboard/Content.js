import React, { useState, useEffect } from 'react'
import Module from './Module'
import './dash.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAudio } from '../../redux/actions/audioAction'
import axios from 'axios'

function Content() {
    const audioFiles = useSelector(state => state.audio)
    console.log(audioFiles)
    const dispatch = useDispatch()
    useEffect(async () => {
        axios.get('http://localhost:5000/db/fetch')
            .then(response => {
                dispatch(fetchAudio(response.data))
            }).catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div className="dash-container">
            <div className="dash-content">
                {
                    audioFiles && audioFiles.audios && audioFiles.audios.map(module => {
                        return <Module key={module.module_id} {...module} />
                    })
                }
            </div>
        </div >
    )
}

export default Content
