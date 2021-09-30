import React from 'react'

function Whyus() {
    return (
        <section id="why-us" className="why-us">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Language Buddy?</h3>
                            <p>
                            Unlike other resources available on the market Language Buddy is absolutely free of cost, made with inputs of locals with the common phrases and words used in day to day conversations and absolutely easy to use.
                            </p>
                          
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-receipt"></i>
                                        <h4>Universally accessible</h4>
                                        <p>Anybody can log into Language Buddy for knowing phrases they might need in day to day conversations, with neatly divided modules guiding you to exactly where you want to be
</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-cube-alt"></i>
                                        <h4>Useful Learning</h4>
                                        <p>Have you ever come across phrases while learning a new language that you will probably never use? Well, Language Buddy consists of cherry-picked phrases and words that you will need in daily conversations</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <i className="bx bx-images"></i>
                                        <h4>Test your knowledge</h4>
                                        <p>Evaluate your knowledge with a series of well thought out exam modules</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End .content--> */}
                    </div>
                </div>

            </div>
        </section>
        //   <!-- End Why Us Section -->
    )
}

export default Whyus
