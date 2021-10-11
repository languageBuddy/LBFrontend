import React, { useState, useEffect } from 'react'
import Module from './Module'
import './dash.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAudio } from '../../redux/actions/audioAction'
import axios from 'axios'
import { getAuth } from '@firebase/auth';
function Content() {
    const audioFiles = useSelector(state => state.audio)
    // console.log(audioFiles)
    const dispatch = useDispatch()


    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(async () => {
        axios.get('/db/fetch')
            .then(response => {
                dispatch(fetchAudio(response.data))
            }).catch(error => {
                console.error(error)
            })
        if (user && user.uid) {
            axios.post('/progress/fetch', {
                uuid: user.uid
            }).then(response => {
                if (response.data !== "") {
                    dispatch({
                        type: 'FETCH_DATA',
                        payload: response.data
                    })
                }
                else {
                    if (user && user.uid) {
                        dispatch({
                            type: 'ADD_USER',
                            payload: {
                                uuid: user.uid
                            }
                        })
                    }
                }
            }).catch(error => {
                console.error(error)
            })
        }
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
