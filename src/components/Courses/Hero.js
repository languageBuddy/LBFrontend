import React from 'react'


function Hero() {
    return (
      
        <div className="col-lg-12">
        <div className="d-block d-md-flex podcast-entry bg-white mb-5" >
          <div className="image" style={{backgroundImage: "url('images/img_1.jpg')"}}></div>
          <div className="text">
            <h3 className="font-weight-light"><a href="single-post.html">Episode 08: How To Create Web Page Using Bootstrap 4</a></h3>
            <div className="text-white mb-3"><span class="text-black-opacity-05"><small>By Mike Smith <span class="sep">/</span> 16 September 2017 <span class="sep">/</span> 1:30:20</small></span></div>

            <div className="player">
              <audio id="player2" preload="none" controls controlsList="nodownload" style={{width:"100%"}}>
                <source src="http://www.largesound.com/ashborytour/sound/AshboryBYU.mp3" type="audio/mp3"/>
              </audio>
            </div>

          </div>
        </div>
        </div>
        
    )
}

export default Hero
