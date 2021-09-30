import React from 'react'

function About() {
    return (
        // <!-- ======= About Section ======= -->
        <section id="about" className="about">
            <div className="container-fluid">

                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                        <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" target="_blank" className="glightbox play-btn mb-4"></a>
                    </div>

                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                        <h3>How to get started with Language Buddy?</h3>
                        <p>To get access to the course resources of Language Buddy, you need to create an account. Follow the steps provided below:</p>

                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-fingerprint"></i></div>
                            <h4 className="title">Authenticate</h4>
                            <p className="description"> Create an account using your Email/Google Account. Log into the said account to get access to Dashboard.</p>
                        </div>

                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-gift"></i></div>
                            <h4 className="title">Dashboard:</h4>
                            <p className="description">Start learning Bengali words and phrases from different modules.</p>
                        </div>

                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-atom"></i></div>
                            <h4 className="title">Evaluate:</h4>
                            <p className="description">Test your learning by taking the carefully constructed exam to complete the course.</p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
        // <!-- End About Section -->
    )
}

export default About
