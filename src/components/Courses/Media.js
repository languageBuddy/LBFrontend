import React, { useEffect } from 'react'
import './course.scss'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { getAuth } from '@firebase/auth';

function Hero(props) {
  const { audio_id, audio_url, audio_text, ImageUrl, module_id } = props
  var current = new Audio(audio_url);

  const progress = useSelector(state => state.progress)
  const dispatch = useDispatch()

  const auth = getAuth();
  const user = auth.currentUser;
  const handleClick = async () => {
    if (user && user.email && progress.progressData[module_id].played[audio_id] !== true) {
      await dispatch({
        type: 'INCREMENT_PROGRESS',
        payload: {
          module_id,
          audio_id,
          percent: 10
        }
      })
    }
    if (current.paused == true) {
      current.play();
    }
    else {
      current.pause();
    }
  }

  useEffect(async () => {
    if (user && user.uid) {
      await axios.post('http://localhost:5000/progress/update', {
        uuid: user.uid,
        update: progress.progressData
      })
    }
  }, [progress.progressData])

  return (

    <div className="col-lg-12 container">
      <div className="d-block d-md-flex podcast-entry bg-white mb-5 border border-2 border-dark"
        style={{ borderRadius: "20px" }}>
        <div className="image-container">
          {/* Add image source here */}
          <img src={ImageUrl} className="course-image" />
          <button className="image-btn" onClick={handleClick}> <i class="bi bi-play-circle fs-2"></i> </button>
        </div>
        <div className="text-container w-100">
          <div className="text-left mb-3">
            <label htmlFor="itemValue mb-1">Bengali </label>
            <h3>{audio_text.bangla_text.benglish} </h3>   {/* Bengali translation in english */}
            <h4>{audio_text.bangla_text.bangla} </h4> {/* bengali translation in bengali  */}
          </div>
          <div className="text-left mb-3">
            <label htmlFor="itemValue mb-1 pe-2" >English (IN)</label>
            <h3>{audio_text.english}</h3>  {/* english translation */}
          </div>

          <div className="text-lef">
            <label htmlFor="itemValue" >Hindi</label>
            <h3>{audio_text.hindi_text.hinglish} </h3>  {/* Hindi translation in english */}
            <h4> {audio_text.hindi_text.hindi} </h4>      {/* Hindi translation in Hindi  */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero
