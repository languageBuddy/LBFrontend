import React from 'react'
import Carousel from './Carousel'
import Navbar from '../Dashboard/Navbar'
import Section from './Section'
import Footer from './Footer'
// import './about.css'

function About() {
    return (
        <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
            <Navbar />
            <Carousel />
            <Section />
            <Footer />
            <style>
                {
                    `
                    @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100&display=swap');
                    @import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100&display=swap');
                    .carousel-item{
                        height: 500px;
                    } 
                    .carousel-item img{
                        height: 500px;
                    }

                    .about-section-text{
                        font-family: "Roboto Slab",Museo,"Helvetica Neue",Helvetica,Arial,sans-serif;
                        font-weight: 500;
                        text-align: left;
                    }

                    .row{
                        background-color: #dfeeee;
                        padding: 10px 0;
                    }

                    .links{
                        display: flex;
                        justify-content: center;
                        padding: 1rem 0;
                    }

                    .icon{
                        text-align:center; 
                        margin-top:5em;
                        padding: 1rem 1rem;
                    }
                `
                }
            </style>
        </div>
    )
}

export default About
