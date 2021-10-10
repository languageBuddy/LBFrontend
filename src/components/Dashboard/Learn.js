import React, { useState, useContext } from 'react'
import Navbar from './Navbar'
import Media from '../Courses/Media';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router';

function Learn() {
    const { id } = useParams()
    const audio = useSelector(state => state.audio)

    const [state, setstate] = useState(audio.audios[id - 1])
    console.log("state")
    console.log(state)
    return (
        <div className="dash-container">
            <Navbar />
            <br /> <br />
            {
                state && state.audios && state.audios.map(aud => {
                    return <Media key={aud.audio_id} {...aud} ImageUrl={state.module_img_url} />
                    
                })
            }
        </div>
    )
}

export default Learn
