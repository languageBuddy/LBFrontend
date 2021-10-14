import React from 'react'
import Img1 from '../../assets/img/Developer/shubham.jpg'
import Img2 from '../../assets/img/Developer/anubhab.jpeg'
import Img3 from '../../assets/img/Developer/kartikeya.jpeg'


function Developer() {
    return (
        // <!-- ======= Testimonials Section ======= -->
        <section id="testimonials" className="testimonials">
            <div className="container">

                <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={Img2} className="testimonial-img" alt="" />
                                        <div>
                                            <h3> <a href="https://www.linkedin.com/mwlite/in/anubhab-ray" target="_blank"> Anubhab Ray </a> </h3>
                                            <h4> Developer </h4>
                                        </div>
                                    </div>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Hello wanderer, I am  like a ninja monitoring the social media in stealth mode waiting for opportune moment to- nah I am just an introvert.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                        <div className="swiper-slide">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={Img3} className="testimonial-img" alt="" />
                                        <div>
                                            <h3> <a href="https://www.linkedin.com/in/kartikeya-singh-" target="_blank"> Kartikeya Singh  </a> </h3>
                                            <h4>Developer </h4>
                                        </div>
                                    </div>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Hello there, thanks for logging into language Buddy. My Epic games ID is: Sygamar. Hit me up if you wanna play some Rocket League.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                        <div className="swiper-slide">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <div className="d-flex">
                                        <img src={Img1} className="testimonial-img" alt="" />
                                        <div>
                                            <h3><a href="https://www.linkedin.com/in/shubham-thorat-8985151a9/" target="_blank"> Shubham Thorat </a> </h3>
                                            <h4>Developer</h4>
                                        </div>
                                    </div>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Hey there, welcome to Language Buddy. If I am not coding I am most likely playing a tabla.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End testimonial item --> */}

                    </div>
                    <div className="swiper-pagination"></div>
                </div>

            </div>
        </section>
        // {/* <!-- End Testimonials Section --> */ }

    )
}

export default Developer
