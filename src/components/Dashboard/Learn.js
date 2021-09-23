import React, { useState, useContext } from 'react'
import Navbar from './Navbar'
import SubModule from '../Courses/SubModule';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router';

function Learn() {
    const { id } = useParams()
    const audio = useSelector(state => state.audio)
    console.log(audio)
    const [state, setstate] = useState(audio[id])
    return (
        <div className="dash-container">
            <Navbar />
            {
                state && state.submodule && state.submodule.map(module => {
                    return <SubModule key={module.submoduleId} {...module} />
                })
            }
        </div>
    )
}

export default Learn
