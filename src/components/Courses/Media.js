import React, { useState } from 'react'
import Image from '../../assets/img/courses/img_1.jpg'
import './course.scss'

function Hero(props) {
  const HandleMusic = () => {
    let aud = document.getElementById("song")
    if (aud.paused == true) {
      aud.play();
    }
    else {
      aud.pause();
    }
  }
  return (

    <div className="col-lg-12 container">
      <div className="d-block d-md-flex podcast-entry bg-white mb-5 border border-2 border-dark"
        style={{ borderRadius: "20px" }}>
        <div className="image-container">
          {/* Add image source here */}
          <img src={Image} className="course-image" />
          <button className="image-btn" onClick={HandleMusic}> <i class="bi bi-play-circle fs-2"></i> </button>
        </div>
        <audio id="song">
          {/* Add sound source here */}
          <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3" type="audio/mp3" />
        </audio>
        <div className="text-container w-100">
          <div className="text-left mb-3">
            <label for="itemValue mb-1">Bengali </label>
            <h3>Tōmāra sāthē dēkhā karē bhālō </h3>   {/* Bengali translation in english */}
            <h4>তোমার সাথে দেখা করে ভালো লাগলো </h4> {/* bengali translation in bengali  */}
          </div>
          <div className="text-left mb-3">
            <label for="itemValue mb-1 pe-2" >English (IN)</label>
            <h3>nice to meet you</h3>  {/* english translation */}
          </div>

          <div className="text-lef">
            <label for="itemValue" >Hindi</label>
            <h3>aap se milakar achchha laga </h3>  {/* Hindi translation in english */}
            <h4> आप से मिलकर अच्छा लगा </h4>      {/* Hindi translation in Hindi  */}
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero
